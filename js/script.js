//bij versie 2 moet er data worden verwerkt

"use strict";

var scoreText = document.querySelector("#scoreBord");
var enemy = document.querySelector("#enemY");
var levelText = document.querySelector("#level");
var containerEl = document.querySelector("#container");
var selectEl = document.querySelector("#colorSelect");

var enemies = ['Black_enemy.svg', 'Yellow_enemy.svg', 'Red_enemy.svg', 'Blue_enemy.svg'];

var punten = 0;
var level = 1
var newEnemy = 0;

function playersChoice() {
    var keuze = selectEl.selectedIndex;
    enemy.src = "img/" + enemies[keuze];
    console.log(enemy);
console.log(enemies);
console.log(enemy.src);
}


function updateScore() {
    punten = punten + 1;
    scoreText.textContent = punten;
}

function levelUp() {
    if (punten >= 10) {
        punten = 0;
        scoreText.textContent = punten;
        newEnemy = newEnemy + 1;
        enemy.src = "img/" + enemies[newEnemy];
        level = level + 1;
        levelText.textContent = level;  
    }
    if (newEnemy >= enemies.length - 1) {
        newEnemy = 0;
    }
}

enemy.addEventListener("click", () => {
    updateScore();
    levelUp();
});

selectEl.addEventListener("change", playersChoice);