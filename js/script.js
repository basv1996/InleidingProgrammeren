//countdown van x aantal seconden en als binnen deze tijd een x aantal punten is behaald dan level up

// een timer die checkt of je een x aantal punten heb behaald binnen een tijd

// easy, medium, hard modus: dus als ik de animatie voor elkaar krijg dat de sprite naar beneden valt en hiervan de snelheid aan te passen

"use strict";

// declaratie van variabelen voor DOM objecten
var scoreText = document.querySelector("#scoreBord");
var enemy = document.querySelector("#enemY");
var levelText = document.querySelector("#level");
var startGameEl = document.querySelector("#startgame");
var containerEl = document.querySelector("#container");
var selectEl = document.querySelector("#colorSelect");
var levelMessage = document.querySelector("#nextlevelmsg");
var moeilijkheidsGraad = document.querySelector("#difficulty");
console.log(moeilijkheidsGraad);

//data verwerken
var enemies = ['Black_enemy.svg', 'Yellow_enemy.svg', 'Red_enemy.svg', 'Blue_enemy.svg'];

var punten = 0;
var level = 1
var newEnemy = 0;

var enemyBreedte = enemy.offsetWidth;
var enemyHoogte = enemy.offsetHeight;

var containerBreedte = containerEl.offsetWidth;
var containerHoogte = containerEl.offsetHeight;


//eventhandlers (functies)
function playersChoice() {
    var keuze = selectEl.selectedIndex;
    enemy.src = "img/" + enemies[keuze];
}

function difficultness() {
    if (moeilijkheidsGraad = medium) {
        enemy.style.width = (enemyBreedte / 2);
        enemy.style.height = (enemyHoogte / 2);
    }
    else if (moeilijkheidsGraad = hard) {
        enemy.style.width = (enemyBreedte / 4);
        enemy.style.height = (enemyHoogte / 4)
    }
}

function randomAchtergrond() {
    var kleur1 = Math.floor(Math.random() * 256);
    var kleur2 = Math.floor(Math.random() * 256);
    var kleur3 = Math.floor(Math.random() * 256);
    var bgKleur = "rgb" + "(" + kleur1 + "," + kleur2 + "," + kleur3 + ")";
    containerEl.style.backgroundColor = bgKleur;
}

function updateScore() {
    punten++;
    scoreText.textContent = punten;
}

function levelUp() {
    if (punten >= 10) {
        punten = 0;
        scoreText.textContent = punten;
        newEnemy++
        enemy.src = "img/" + enemies[newEnemy];
        randomAchtergrond();
        level++;
        levelText.textContent = level;  
        levelMessage.innerHTML = "Level" + level;
    }
    if (newEnemy >= enemies.length - 1) {
        newEnemy = 0;
    }
}

function randomSpot() {
    var positieEnemyX = Math.floor(Math.random() * containerBreedte);
    var positieEnemyY = Math.floor(Math.random() * containerBreedte);

    if (positieEnemyX >= containerBreedte - enemyBreedte) {
        enemy.style.left = positieEnemyX - enemyBreedte + "px";
    } else if (positieEnemyY >= containerHoogte - enemyHoogte) {
        enemy.style.top = positieEnemyY - enemyHoogte + "px";
    } else {
        enemy.style.left = positieEnemyX + "px";
        enemy.style.top = positieEnemyY + "px";
    }
}

enemy.addEventListener("click", () => {
    updateScore();
    levelUp();
    randomSpot();
});

startGameEl.addEventListener("click", randomSpot);
selectEl.addEventListener("change", playersChoice);