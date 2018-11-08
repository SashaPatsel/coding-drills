class Hero
  attr_reader :name, :power, :health, :attack

  def initialize(name, secret_identity, powers, enemies)
    @name = name
    @secret_identity = secret_identity
    @powers = powers
    @enemies = enemies
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