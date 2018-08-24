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
  agility: 40
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
var zombie1 = {
  health: 100,
  attack: [0, 5],
  agility: 15
}

* Attack and agility behave the same as the hero's does. 

* Attack behaves the same as a gun's does


### Your game has the following requirements: 
1. Each round a hero should choose a single gun

2. A gun's uses should decrement by one after a round if it is the gun the hero chose in that same round. 

3. The gun's damage should be calculated once a user chooses a gun. It should be a random number between the two values in the gun's `attack` array

4. Using the gun's reliability, determine randomly whether or not the gun will do damage. This will only be calculated once, not for each zombie.

5. Using a zombie's agility, determine randomly whether or not the zombie will receive damage. This will be calculated individually for each zombie

6. 
