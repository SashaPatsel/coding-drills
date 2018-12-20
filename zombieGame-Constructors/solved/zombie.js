//Zombie constructor
function Zombie(name, health, attack, accuracy) {
  this.name = name
  this.health = health
  this.attack = attack
  this.accuracy = accuracy
  this.didDamage = false
  this.roundDamage = 0

  this.damageBool = function (perc) {
    var comp = Math.floor(Math.random() * 100) + 1

    if (perc - comp > 0) {
      this.didDamage = false
    } else {
      this.didDamage = true
    }
  }

  this.calcDamage = function (min, max) {
    this.roundDamage = Math.floor(Math.random() * (max - min) + min);

  }
}

module.exports = Zombie