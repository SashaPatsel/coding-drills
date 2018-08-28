var inquirer = require("inquirer");



// OUR HERO'S STATS
var hero = {
  health: 100,
}


//Weapon constructor
function Weapon (name, reach, attack, risk, reliability, uses) {
  this.name = name
  this.reach = reach
  this.attack = attack
  this.risk = risk
  this.reliability = reliability
  this.uses = uses
  this.didDam = false
  this.roundDamage = 0

  this.used = function() {
    this.uses--
  }

  this.damageBool = function(perc) {
    var comp = Math.floor(Math.random() * 100) + 1
  
    if (perc - comp > 0) {
      this.didDam = false
    } else {
      this.didDam = true
    }
  }

  this.calcDamage = function(min, max) {
    this.roundDamage = Math.floor(Math.random() * (max - min) + min);
  }
}

//Create new instances of our weapons
var bearHands = new Weapon("Bear Hands", 1, [5,5], 95, 90, 100000000000000)
var machete = new Weapon("Machete", 1, [40,60], 80, 90, 5)
var shotgun = new Weapon("Shotgun", 2, [30,50], 65, 80, 5)
var pistol = new Weapon("Pistol", 1, [25,40], 50, 75, 5)
var machineGun = new Weapon("Machine Gun", 1, [15,30], 30, 65, 5)
var sniper = new Weapon("Sniper", 1, [40,60], 30, 20, 5)
var rpg = new Weapon("RPG", 1, [20,35], 95, 40, 5)

//Zombie constructor
function Zombie(health, attack, agility) {
  this.health = health
  this.attack = attack
  this.agility = agility
  this.receivedDam = false
  this.roundDamage = 0

  this.damageBool = function(perc) {
    var comp = Math.floor(Math.random() * 100) + 1
  
    if (perc - comp > 0) {
      this.receivedDam = false
    } else {
      this.receivedDam = true
    }
  }

  this.calcDamage = function(min, max) {
    this.roundDamage = Math.floor(Math.random() * (max - min) + min);
  }
}

//Create new instances of zombies
var zombie1 = new Zombie(100, [0,5], 15)
var zombie2 = new Zombie(90, [1,6], 18)
var zombie3 = new Zombie(85, [2,4], 20)
var zombie4 = new Zombie(80, [2,5], 22)
var zombie5 = new Zombie(60, [7,10], 10)

var zombieCons = []

//For inquirer prompt
var zombieChoices = ["zombie1", "zombie2", "zombie3", "zombie4", "zombie5"]

//For objecy lookup
var zombieIndex = ["zombie1", "zombie2", "zombie3", "zombie4", "zombie5"]


var guns = ["Bear hands", "Machete", "Shotgun", "Pistol", "Machine Gun", "Sniper", "RPG", "View Weapon Stats"]




