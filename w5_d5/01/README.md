# Node & Inquirer

## Zombie Game: Advanced

## Instructions

#### Create a zombie game with strategy
In this zombie game, the user will have their choice of gun when it comes to confronting the zombies.

Create a game where a hero must confront five zombies. 

This game is played out in rounds. Each round the hero will pick a method of attack. Each choice yields different chances of dealing damage, and taking damage back in return. 

You will need to create three different `types` of objects:

1. Our Hero object. It should look like this: 
```
var hero = {
  health: 100,

}
```
* Health represents the player's current health. When it hits 0, the game is over.

2. A gun object:
```
var bearHands = {
  reach: 1,
  attack: [5,5],
  risk: 95,
  reliability: 90,
  uses: 1000000000000000 
}
```

* Reach is the amount of zombies the "gun" can damage in a given turn

* Attack is the amount of damage a gun can do. The index of 0 in the array represents the minimum, the index of 1 in the array represents the maximum

* Risk is the percentage chance a user has of taking damage back in return from a zombie. This will be recalculated

* Reliability is the chance a gun will do the damage that has been calculated from that gun's attack

* Uses is the amount of rounds a gun can be played before it is no longer usable

3. A zombie object:
```
var zombie1 = {
  health: 100,
  attack: [0, 5],
  agility: 15
}
```
* Attack and agility behave the same as the hero's does. 

* Attack behaves the same as a gun's does


### Your game has the following requirements: 
1. Each round a hero should choose a single gun

2. A gun's uses should decrement by one after a round if it is the gun the hero chose in that same round. 

3. The gun's damage should be calculated once a user chooses a gun. It should be a random number between the two values in the gun's `attack` array

4. Using the gun's reliability, determine randomly whether or not the gun will do damage. This will only be calculated once, not for each zombie.

5. Using a zombie's agility, determine randomly whether or not the zombie will receive damage. This will be calculated individually for each zombie

6. Using the gun's risk, determine randomly whether or not the hero will receive damage.

7. If the hero receives damage, calculate a damage from each zombie using their respective attack. The hero will receive the sum of their attacks as damage in return.

8. The hero wins if all the zombies' health is at or below 0. The zombies win if the hero's health is at or below 0. 

9. The reach of a gun will do damage to x number of other zombies. Determine randomly which other zombies will be damaged.


### Stats:

#### If you're not feeling creative, feel free to use the following stats:

```
 bearHands = {
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

 machete = {
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

 shotgun = {
  //number of zombies affected
  reach: 2,
  //Range of possible damage
  attack: [30,50],
  //Chance of taking damge back (%)
  risk: 65,
  reliability: 80,
  //"health" of gun
  uses: 5 
}

 pistol = {
  //number of zombies affected
  reach: 2,
  //Range of possible damage
  attack: [25,40],
  //Chance of taking damge back (%)
  risk: 50,
  reliability: 75,
  //"health" of gun
  uses: 5 
}

 machineGun = {
  //number of zombies affected
  reach: 3,
  //Range of possible damage
  attack: [15,30],
  //Chance of taking damge back (%)
  risk: 30,
  reliability: 65,
  //"health" of gun
  uses: 5 
}

 sniper = {
  //number of zombies affected
  reach: 1,
  //Range of possible damage
  attack: [40,60],
  //Chance of taking damge back (%)
  risk: 50,
  reliability: 10,
  //"health" of gun
  uses: 5 
}

 rpg = {
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

     zombie1 = {
      health: 100,
      attack: [0, 5],
      //Chance of dodging (%)
      agility: 15
    }

     zombie2 = {
      health: 90,
      attack: [1, 6],
      //Chance of dodging (%)
      agility: 18
    }

     zombie3 = {
      health: 85,
      attack: [2, 4],
      //Chance of dodging (%)
      agility: 20
    }


     zombie4 = {
      health: 80,
      attack: [2, 5],
      //Chance of dodging (%)
      agility: 22
    }


     zombie5 = {
      health: 60,
      attack: [7, 10],
      //Chance of dodging (%)
      agility: 10
    }


```