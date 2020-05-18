"use strict";

var scoreText = document.querySelector("#scoreBord");
var levelText = document.querySelector("#level");
var enemy = document.querySelector("#enemY");
var containerEl = document.querySelector("#container");
var bodyEl = document.querySelector("body");

var punten = 0;
var level = 1;


function updateScore() {
    punten = punten + 1; // tel 1 punt bij de variablele punten op
    scoreText.textContent = punten; // verander de tekst in de waarde "punten"
}

function levelUp() {
    if (punten >= 10) //als variabele punten groter of gelijk is aan 10 voer dan onderstaande code uit
    {
        punten = 0; //reset het punten aantal
        scoreText.textContent = punten; // verander de tekst in de waarde "punten"
        level = level + 1; // tel 1 bij de variabele level op
        levelText.textContent = level;   // verander de tekst in de waarde "level" 
    }   
}

function changeColour() {
    if (level % 2) //als level een even getal is (deelbaar door 2 zonder rest getal)
     {
containerEl.className = ''; //dit zorgt ervoor de classname van het element wordt gereset naar niks
        bodyEl.className = '';
        containerEl.classList.add('rood'); // voeg de class rood aan het container element in de html toe
        bodyEl.classList.add('groen'); // voeg de class groen aan het container element in de html toe
     }
    else 
    {
        containerEl.className = '';
        bodyEl.className = '';
        containerEl.classList.add('groen');
        bodyEl.classList.add('rood');
    }
}

enemy.addEventListener("click", updateScore); //als er op de enemy een click wordt gedetacteerd voer dan de functie updateScore uit
enemy.addEventListener("click",levelUp); //als er op de enemy een click wordt gedetacteerd voer dan de functie levelUp uit
enemy.addEventListener("click",changeColour); //als er op de enemy een click wordt gedetacteerd voer dan de functie changeColour uit
