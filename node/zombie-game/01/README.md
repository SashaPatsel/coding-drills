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

* Risk is the percentage chance a user has of taking damage back in return from a zombie. This will be recalculated every round

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

1. The user is given the basic rules of the game in addition to a brief description of each gun

2. The zombies' health and hero's health should be updated and displayed every round. 

3. Each round a hero should choose a single gun

4. A gun's uses should decrement by one after a round if it is the gun the hero chose in that same round. It should no longer be a choice.

5. The gun's damage should be calculated once a user chooses a gun. It should be a random number between the two values in the gun's `attack` array

6. Using the gun's reliability, determine randomly whether or not the gun will do damage. This will only be calculated once, not for each zombie.

7. Prompt the user to select a zombie to attack. If the reach is larger than 1, the game should determine the other zombies that are affected. 

8. Using a zombie's agility, determine randomly whether or not the zombie will receive damage. This will be calculated individually for each zombie.

9. Using the gun's risk, determine randomly whether or not the hero will receive damage.

10. If the hero receives damage, calculate a damage from each zombie using their respective attack. The hero will receive the sum of their attacks as damage in return.

11. Inform the user whether or not their shot made contact, whether a zombie was hit (display the damage done to the zombie if they were), how much damage the hero received, and the hero's remaining health. 

12. If a zombie's health is at or below 0, that zombie should no longer be able to do damage and should be removed from displays and as an attack choice. 

13. The hero wins if all the zombies' health is at or below 0. The zombies win if the hero's health is at or below 0. 



### Stats:

#### If you're not feeling creative, feel free to use the following stats:

```

  bearHands: {
    name: "Bare Hands",
    reach: 1,
    attack: [5, 5],
    risk: 95,
    reliability: 90,
    uses: 1000000000000000
  }

  machete: {
    name: "Machete",
    reach: 1,
    attack: [40, 60],
    risk: 80,
    reliability: 90,
    uses: 5
  }

  shotgun: {
    name: "Shotgun",
    reach: 2,
    attack: [30, 50],
    risk: 65,
    reliability: 80,
    uses: 5
  }

  pistol: {
    name: "Pistol",
    reach: 2,
    attack: [25, 40],
    risk: 50,
    reliability: 75,
    uses: 5
  }

  machineGun: {
    name: "Machine Gun",
    reach: 3,
    attack: [15, 30],
    risk: 30,
    reliability: 65,
    uses: 5
  }

  sniper: {
    name: "Sniper",
    reach: 1,
    attack: [40, 60],
    risk: 30,
    reliability: 20,
    uses: 5
  }

  rpg: {
    name: "RPG",
    reach: 4,
    attack: [20, 35],
    risk: 95,
    reliability: 40,
    uses: 5
  }




  zombie1: {
    health: 100,
    attack: [0, 5],
    agility: 15,
    receivedDam: false
  }

  zombie2: {
    health: 90,
    attack: [1, 6],
    agility: 18,
    receivedDam: false
  }

  zombie3: {
    health: 85,
    attack: [2, 4],
    agility: 20,
    receivedDam: false
  }

  zombie4: {
    health: 80,
    attack: [2, 5],
    agility: 22,
    receivedDam: false
  }


  zombie5: {
    health: 60,
    attack: [7, 10],
    agility: 10,
    receivedDam: false
  }


```