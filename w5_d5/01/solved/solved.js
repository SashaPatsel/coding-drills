var inquirer = require("inquirer");



// OUR HERO'S STATS
var hero = {
  health: 100,
  agility: 40
}


//POSSIBLE GUNS
var guns = ["Bear hands","Machete", "Shotgun", "Pistol", "Machine Gun", "Sniper", "RPG"]


var bearHands = {
  //number of zombies affected
  reach: 1,
  //Range of possible damage
  attack: [5,5],
  //Chance of taking damge back (%)
  risk: 95,
  //chance of landing damage (%)
  reliability: 90,
  //"health" of gun
  uses: 1000000000000000 
}

var machete = {
  //number of zombies affected
  reach: 1,
  //Range of possible damage
  attack: [40,60],
  //Chance of taking damge back (%)
  risk: 80,
  //chance of landing damage (%)
  reliability: 90,
  //"health" of gun
  uses: 5 
}

var shotgun = {
  //number of zombies affected
  reach: 2,
  //Range of possible damage
  attack: [30,50],
  //Chance of taking damge back (%)
  risk: 65
}

var pistol = {
  //number of zombies affected
  reach: 2,
  //Range of possible damage
  attack: [25,40],
  //Chance of taking damge back (%)
  risk: 50
}

var machineGun = {
  //number of zombies affected
  reach: 3,
  //Range of possible damage
  attack: [15,30],
  //Chance of taking damge back (%)
  risk: 30
}

var sniper = {
  //number of zombies affected
  reach: 1,
  //Range of possible damage
  attack: [40,60],
  //Chance of taking damge back (%)
  risk: 80
}

var rpg = {
  //number of zombies affected
  reach: 1,
  //Range of possible damage
  attack: [40,60],
  //Chance of taking damge back (%)
  risk: 80
}


var zombie1 = {
  health: 100,
  attack: [0, 5],
  //Chance of dodging (%)
  agility: 15
}

var zombie2 = {
  health: 90,
  attack: [1, 6],
  //Chance of dodging (%)
  agility: 18
}

var zombie3 = {
  health: 85,
  attack: [2, 4],
  //Chance of dodging (%)
  agility: 20
}


var zombie4 = {
  health: 80,
  attack: [2, 5],
  //Chance of dodging (%)
  agility: 22
}


var zombie5 = {
  health: 60,
  attack: [7, 10],
  //Chance of dodging (%)
  agility: 10
}


// Created a generic function that checks if the user won or lost.
function checkRound() {

  console.log("");
  console.log("");

  // If the user has less than 0 health.... then the user lost.
  if (hero.health <= 0) {

    console.log("###############################################");
    console.log("");
    console.log("Game over dude. It looks like you're dead.");
    console.log("");
    console.log("###############################################");

    // Exit the game
    process.exit();
  }

  // If the zombie has less than 0 health.... then the user won.
  if (zombie1.health <= 0 && zombie2.health <= 0 && zombie3.health <= 0 && zombie4.health <= 0 && zombie5.health <= 0) {

    console.log("###############################################");
    console.log("");
    console.log("Victory! You defeated the zombie and survived!");
    console.log("");
    console.log("###############################################");

    // Exit the game
    process.exit();
  }

  // After performing the "check", the next round is initiated.
  playRound();

}


// This function holds the game logic
function playRound() {

  // We create a list prompt. Specifying that the user must pick a random number between 1 and 5.
  inquirer.prompt([
    {
      type: "list",
      name: "gun",
      message: "Choose your Weapon",
      choices: guns
    }

  ]).then(function(game) {
    console.log("You chose a "+ game.gun + "!")
    switch (game.gun) {
      case "Machete":
        console.log("The machete let's you do critical damage to one zombie.")
        break;
      case "Shotgun":

        break;
      case "Pistol":

        break;
      case "Machine Gun":

        break;
      case "Sniper":

        break;

      case "RPG": 
      
        break;
    }



    function calcDamage(min, max) {
      return Math.random() * (max - min) + min;
    }

  });
}

// Starts the game!
playRound();
