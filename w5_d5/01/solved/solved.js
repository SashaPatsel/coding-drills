var inquirer = require("inquirer");



// OUR HERO'S STATS
var hero = {
  health: 100,
}

//Game vars
var playerDam = 0;
var playerDidDam = false;


//Game functions
function calcDamage(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function damageBool(perc) {
  var comp = Math.floor(Math.random() * 100) + 1

  if (perc - comp > 0) {
    return false
  } else {
    return true
  }
}

//POSSIBLE GUNS
var guns = ["Bear hands", "Machete", "Shotgun", "Pistol", "Machine Gun", "Sniper", "RPG"]

var zombieChoices = ["zombie1", "zombie2", "zombie3", "zombie4", "zombie5"]

var weapons = {
bearHands: {
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
},

machete: {
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
},

shotgun: {
  //number of zombies affected
  reach: 2,
  //Range of possible damage
  attack: [30,50],
  //Chance of taking damge back (%)
  risk: 65,
  reliability: 80,
  //"health" of gun
  uses: 5 
},

pistol: {
  //number of zombies affected
  reach: 2,
  //Range of possible damage
  attack: [25,40],
  //Chance of taking damge back (%)
  risk: 50,
  reliability: 75,
  //"health" of gun
  uses: 5 
},

machineGun: {
  //number of zombies affected
  reach: 3,
  //Range of possible damage
  attack: [15,30],
  //Chance of taking damge back (%)
  risk: 30,
  reliability: 65,
  //"health" of gun
  uses: 5 
},

sniper: {
  //number of zombies affected
  reach: 1,
  //Range of possible damage
  attack: [40,60],
  //Chance of taking damge back (%)
  risk: 50,
  reliability: 10,
  //"health" of gun
  uses: 5 
},

rpg: {
  //number of zombies affected
  reach: 4,
  //Range of possible damage
  attack: [40,60],
  //Chance of taking damge back (%)
  risk: 95,
  reliability: 40,
  //"health" of gun
  uses: 5 
}
}

var zombies = {

     zombie1: {
      health: 100,
      attack: [0, 5],
      //Chance of dodging (%)
      agility: 15,
      receivedDam: false
    },

     zombie2: {
      health: 90,
      attack: [1, 6],
      //Chance of dodging (%)
      agility: 18,
      receivedDam: false
    },

     zombie3: {
      health: 85,
      attack: [2, 4],
      //Chance of dodging (%)
      agility: 20,
      receivedDam: false
    },


     zombie4: {
      health: 80,
      attack: [2, 5],
      //Chance of dodging (%)
      agility: 22,
      receivedDam: false
    },


     zombie5: {
      health: 60,
      attack: [7, 10],
      //Chance of dodging (%)
      agility: 10,
      receivedDam: false
    }
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

  for (var i = 0 ; i < zombies.length ; i++) {
    if (zombies[i].health <= 0) {
      zombies.splice(zombies.indexOf(zombies[i]))
    }
  }



  // If the zombie has less than 0 health.... then the user won.
  if (zombies.length === 0) {

    console.log("###############################################");
    console.log("");
    console.log("Victory! You defeated the zombies and survived!");
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
  console.log("\n=============================\n")
  console.log("Hero Health: ",hero.health)
  console.log("\n=============================\n")
  console.log("Zombie1 Health: ",zombies.zombie1.health)
  console.log("\n=============================\n")
  console.log("Zombie2 Health: ",zombies.zombie2.health)
  console.log("\n=============================\n")
  console.log("Zombie3 Health: ",zombies.zombie3.health)
  console.log("\n=============================\n")
  console.log("Zombie4 Health: ",zombies.zombie4.health)
  console.log("\n=============================\n")
  console.log("Zombie5 Health: ",zombies.zombie5.health)
  console.log("\n=============================\n")
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

      case "Bear Hands":
        //Set the player's damae to the range
        playerDam = calcDamage(weapons.bearHands.attack[0], weapons.bearHands.attack[1]);
        playerDidDam = damageBool(weapons.bearHands.reliability)
        
        weapons.bearHands.uses--

        pickZombie(weapons.bearHands)
        break;
      case "Machete":
        playerDam = calcDamage(weapons.machete.attack[0], weapons.machete.attack[1]);
        playerDidDam = damageBool(weapons.machete.reliability)
        weapons.machete.uses--
        pickZombie(weapons.machete)
        break;
      case "Shotgun":
        playerDam = calcDamage(weapons.shotgun.attack[0], weapons.shotgun.attack[1]);
        playerDidDam = damageBool(weapons.shotgun.reliability)
        weapons.shotgun.uses--
        pickZombie(weapons.shotgun)
        break;
      case "Pistol":
        playerDam = calcDamage(weapons.pistol.attack[0], pistol.attack[1]);
        playerDidDam = damageBool(weapons.pistol.reliability)
        weapons.pistol.uses--
        pickZombie(weapons.pistol)
        break;
      case "Machine Gun":
        playerDam = calcDamage(weapons.machineGun.attack[0], weapons.machineGun.attack[1]);
        playerDidDam = damageBool(weapons.machineGun.reliability)
        weapons.machineGun.uses--
        pickZombie(weapons.machineGun)
        break;
      case "Sniper":
        playerDam = calcDamage(weapons.sniper.attack[0], weapons.sniper.attack[1]);
        playerDidDam = damageBool(weapons.sniper.reliability)
        weapons.sniper.uses--
        pickZombie(weapons.sniper)
        break;

      case "RPG": 
        playerDam = calcDamage(weapons.rpg.attack[0], weapons.rpg.attack[1]);
        playerDidDam = damageBool(weapons.rpg.reliability)
        weapons.rpg.uses--
        pickZombie(weapons.rpg)
        break;
    }


  });
}

function pickZombie(weapon) {
  inquirer.prompt([
    {
      type: "list",
      name: "zombie",
      message: "Pick a zombie to attack",
      choices: zombieChoices
    }

  ]).then(function(zombie) {
    zombies[zombie.zombie].receivedDam = damageBool(zombies[zombie.zombie].agility)

    if (zombies[zombie.zombie].receivedDam === true) {
      console.log("Congrats, you landed a shot for" + playerDam + " damge!")
      zombies[zombie.zombie].health -= playerDam
      console.log(zombies[zombie.zombie] + " health: " + zombies[zombie.zombie].health)
    } else {
      console.log("The zombie dodged your attack")
    }

    if (zombies[zombie.zombie].health <= 0) {

      for (var i = 0 ; i < zombieChoices.length ; i++) {
        if (zombieChoices[i] === zombie.zombie) {
          zombieChoices.splice(i,1)
        }
      }

    }
    checkRound()
  })  
}


// Starts the game!
playRound();

