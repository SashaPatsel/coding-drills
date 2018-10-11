profile = {
  :name => "Sasha",
  :age => 24,
  :family_members => ["Ken", "Galina", "Katia", "Nastia"],
  :likesMushrooms => false
}
# You cannot directly access elements in arrays nested in dictionaries in ruby
family_members = profile[:family_members]

puts "#{profile[:name]}'s older sister is #{family_members[2]}"

puts "Jim: #{profile[:name]}, age #{profile[:age]}, likes Mushrooms"

puts "Dwight: #{profile[:likesMushrooms]}. #{profile[:name]} does not like mushrooms"

family_members >> ""