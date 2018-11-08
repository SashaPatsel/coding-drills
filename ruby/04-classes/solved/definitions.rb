class Hero
  attr_reader :name, :power, :health, :attack

  def initialize(name, power, health, attack)
    @name = name
    @power = power
    @health = health
    @attack = attack
  end
  
  
end  

class Villain
  attr_reader :name, :power, :nemeses

  def initialize(name, powers, nemeses)
    @name = name
    @powers = powers
    @nemeses = nemeses
  end

  def threat(hero)
    puts "Prepare to meet your doom, #{hero}. I am #{@name}, and I have the ability to #{powers}. Muahahahaha."
  end  
end  