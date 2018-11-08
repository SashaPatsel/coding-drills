require "./helpers"
require "./definitions"

def start_fight()

  puts "Heroes VS. Villains! The battle for Earth!"

  print_space()
  
  puts "First, please tell us about the hero"

  puts "What is the hero's name?"

  hero_name = gets.chomp

  puts "What is the hero's power?"

  hero_power = gets.chomp

  puts "How much health does the hero have?"

  hero_health = gets.chomp

  puts "What is the hero's attack power?"

  hero_attack = gets.chomp

  print_space()

  new_hero = Hero.new hero_name, hero_power, hero_health, hero_attack

  puts new_hero.name
  puts new_hero.attack
  
end  

start_fight()