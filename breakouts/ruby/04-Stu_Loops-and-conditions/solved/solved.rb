patsel_grocery = {
  :owner => "Sasha P",
  :location => "San Francisco",
  :num_stores => 8,
  :foods => ["beans", "cream cheese", "hummus", "guacamole", "cookies", "pizza", "twix", "peach"]
}

# 1.
patsel_grocery[:foods].each do | food |
  puts food
end 

# 2.
# Store the original array
all_foods = patsel_grocery[:foods]
# Empty the original, now that we have a copy
patsel_grocery[:foods] = []
# Set a counter to both back out of our loop and keep an icrementing id
count = 0
# Loop for as many items as there are in our inventory
while count < all_foods.length do
  # For each iteration of the loop, add a new hash, where the key name points to the original element in the array, and id points to an incrementing counter
  patsel_grocery[:foods] << {
      :name => all_foods[count],
      :id => count
  }
  # Increment count so we can exit the loop and increment for the id
  count += 1  
end  

print patsel_grocery[:foods]

#3
gone_prods = []

patsel_grocery[:foods].each do | food |
  if food[:id] % 2 != 0
    gone_prods << food
  end  
end 


#4
patsel_grocery[:foods] -= gone_prods

puts patsel_grocery[:foods]

#5

patsel_grocery[:foods].each do | food |
  food[:price] = 2.50
end 

puts patsel_grocery[:foods]