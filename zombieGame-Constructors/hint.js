// ================= STEP 6 ====================

function Game() {
  // This function holds the game logic
  this.playRound = function () {

    //===================================================

    // STEP 6.1: Display the health of the zombies and hero.

    // Loop through the zombieFighters array, and display their health. Outside of the loop, display the hero's health.
    console.log("\n=============================\n")


    console.log("\n=============================\n")
  //===================================================

  //===================================================

    // STEP 6.2: Keep track of this.

    // Remember, the keyword "this" refers to the function that invoked it. When we use anonymous functions within constructors, we run the risk of losing track of this. 

    //Given our current scope, this is a great place to create a variable that points to "this". We can use this variable later down the line



  //===================================================



    inquirer.prompt([
      {
        type: "list",
        name: "gun",
        message: "Choose your Weapon",
        choices: guns
      }

    ]).then(function (game) {
      console.log("You chose a " + game.gun + "!")

      //===================================================

    // STEP 6.3: Picking a gun.

    // For each of the following cases (aside from the last--"View Weapon Stats"):

    //6.3.1:
    //set the damage of the gun for the current round using the calcDamage function in Weapon
    
    //6.3.2:
    //set the didDam boolean using the damageBool function in Weapon

    //6.3.3:
    //decrement the amount of uses of the gun
    
    //6.3.4:
    //invoke the pickZombie function, passing in the corresponding instance of the Weapon constructor as an argument 


      switch (game.gun) {

        case "Bear hands":

          break;

        case "Machete":

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

//===================================================

        case "View Weapon Stats":
        //===================================================
        //6.4 Display the weapon stats
        //6.4.1
        // In between the "+"s below, insert the corresponding gun's remaining uses
          console.log("Bear Hands:\n reach: 1\n attack: 5 \n risk:95\n reliability: 90 \n uses: ∞\n\n Machete: \n reach: 1\n attack: min(40), max(60)\n risk: 80\n reliability: 90\n uses: " +  + "\n\nShotgun: \n reach: 2\n attack: min(30), max(50)\n risk: 65\n reliability: 80\n uses: " +  + "\n\nPistol: \n reach: 2\n attack: min(25) max(40)\n risk: 50\n reliability: 75\n uses: " +  + "\n\nMachine Gun:\n reach: 3\n attack: min(15), max(30)\n risk: 30\n reliability: 65\n uses: " +  + "\n\nSniper:\n reach: 1\n attack: min(40) max(60)\n risk: 30\n reliability: 20\n uses: " +  + "\n\nRPG:\n reach: 4\n attack: min(20), max(35)\n risk: 95\n reliability: 40\n uses: " +  + "\n\n")
          //6.4.2
          //Invoke the next round function

          //===================================================
          break;
      }


    });
  }



  this.pickZombie = function (weapon) {

    inquirer.prompt([
      {
        type: "list",
        name: "zombie",
        message: "Pick a zombie to attack",
        choices: zombieChoices
      }

    ]).then(function (zombie) {
  // ======================================
  //6.5 
  // For each of the following cases:
  // invoke the fight function, passing in the corresponding zombie, and the weapon (which has already been passed to this function) as arguments.
  // Hint: You may lose track of "this". If you do, please reference step 6.2

      switch (zombie.zombie) {
        case "zombie1":
          
          break;
        case "zombie2":
          
          break;
        case "zombie3":
          
          break;
        case "zombie4":
          
          break;
        case "zombie5":
          
          break;
           // ======================================
      }

    })
  }
  

  this.fight = function (zombie, weapon) {
    // Determine reach
    var zombieVictims = []
    zombieVictims.push(zombie)
    for (var i = 0; i < zombieFighters.length; i++) {
      if (zombieVictims.length < weapon.reach && zombieFighters[i].name !== zombie.name) {
        zombieVictims.push(zombieFighters[i])
      }
    }

    if (!weapon.didDam) {
      console.log("\nShot on target")

      for (var i = 0; i < zombieVictims.length; i++) {
       
        zombieVictims[i].damageBool(zombieVictims[i].agility)

        if (zombieVictims[i].receivedDam === true) {
          console.log("\nCongrats, you landed a shot for " + weapon.roundDamage + " damage on " + zombieVictims[i].name + "!")
          zombieVictims[i].health -= weapon.roundDamage

        } else {
          console.log("\n" + zombieVictims[i].name + " dodged your attack")
        }




      }
    } else {
      console.log("\nOooooh, tough miss. Your shot was not on target.")
    }

    //If a zombie is defeated


    for (var i = 0; i < zombieVictims.length; i++) {
      if (zombieVictims[i].health <= 0) {
        console.log("\nCongrats, you defeated " + zombieVictims[i].name)
        //Make the zombie unable to attack anymore
        zombieVictims[i].attack = [0, 0]
        //Remove the zombie as a choice in the inquirer prompt
        zombieChoices.splice(zombieChoices.indexOf(zombieVictims[i].name), 1)
      }
    }



    // If the hero takes damage
    if (!weapon.damageBool(weapon.risk)) {
      
      zombie1.calcDamage(zombie1.attack[0], zombie1.attack[1])
      zombie2.calcDamage(zombie2.attack[0], zombie2.attack[1])
      zombie3.calcDamage(zombie3.attack[0], zombie3.attack[1])
      zombie4.calcDamage(zombie4.attack[0], zombie4.attack[1])
      zombie5.calcDamage(zombie5.attack[0], zombie5.attack[1])
      
      var zombieDamSum = zombie1.roundDamage + zombie2.roundDamage + zombie3.roundDamage + zombie4.roundDamage + zombie5.roundDamage;

      hero.health -= zombieDamSum
      console.log("\nThe hero has been dealt " + zombieDamSum + " damage.")
      console.log("\nThe hero has " + hero.health + " health.")

    } else {
      console.log("\nPhew, that was a close one. You avoided all damage")
    }

    if (weapon.uses < 1) {
      guns.splice(guns.indexOf(weapon.name), 1)
    }

    this.nextRound()
  }

  this.nextRound = function () {
    var play = this
    inquirer.prompt([
      {
        type: "input",
        name: "continue",
        message: "Press ENTER to continue"
      }
    ]).then(function (res) {
      play.checkRound()
    })
  }

  // Created a generic function that checks if the user won or lost.
  this.checkRound = function () {


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
    if (zombieChoices.length === 0) {

      console.log("###############################################");
      console.log("");
      console.log("Victory! You defeated the zombies and survived!");
      console.log("");
      console.log("###############################################");

      // Exit the game
      process.exit();
    }

    // After performing the "check", the next round is initiated.
    this.playRound();

  }
}

// =============================================