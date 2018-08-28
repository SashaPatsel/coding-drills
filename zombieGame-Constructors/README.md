# Constructors

## Recreate the zombie game using constructor functions

## Prerequisites
Install inquirer.

## Overview
In this exercise you are given a completed zombie game. Go ahead and run original.js to test it out.

You may notice that over a hundred lines of code are dedicated to defining our weapons and zombies. That's definitely overkill.

Furthermore, if we wanted to add more zombies or weapons to our game, we would have to write a lot more code to define those new objects.

Using the code in prompt.js, redesign this game so that it uses constructor functions. 

You will need to define constructors for zombies and for weapons.

Your game should run exactly the same as the one in original.js does.

It may be helpful for you to leave both the file you are working on and original.js open next to one another.


## Instructions
Follow the steps below to complete the assignment. There is a lot of code, but if you follow these steps, you should be able to navigate through it without doing a deep-dive into the code original.js.

You will also notice that each step is found in between comments. This is so you can easily refer back to the corresponding step in this README for instructions. 

1. Navigate to `weapon.js`. In this file, you'll create a constructor called `Weapon`. We will use this constructor to easily create new weapons.

`Weapon` takes the following as arguments:
- name (string)
- reach (number)
- attack (array with two indices)
- risk (number)
- reliability (number)
- uses (number)

`Weapon` has the following properties:
- this.name, set to name 
- this.reach, set to reach
- this.attack, set to attack
- this.risk, set to risk
- this.reliability, set to reliabilitiy
- this.uses, set to uses
- this.didDam, set to false
- this.receivedDam, set to false
- this.roundDamage, set to 0