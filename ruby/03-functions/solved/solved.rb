patsel_grocery = {
  :owner => "Sasha P",
  :location => "San Francisco",
  :num_stores => 8,
  :foods => ["beans", "cream cheese", "hummus", "guacamole", "cookies", "pizza", "twix", "peach"]
}


# 1.
def convert_items_to_obj(obj) 
  all_foods = obj[:foods]
  obj[:foods] = []
  count = 0
  while count < all_foods.length do
    obj[:foods] << {
        :name => all_foods[count],
        :id => count,
        :sell_price => 2.50,
        :cost => 1.15
    }
    count += 1  
  end  
  print obj[:foods]
end

convert_items_to_obj(obj = patsel_grocery)

# 2. 
def add_props(key, value)
  patsel_grocery[:key] = value
end  


# 3. 
def net_profit(inventory)
  profit = 0
  cost = 0
  inventory.each do | item |
    profit += item[:sell_price]
    cost += item[:cost]
  end
  return profit - cost  
end  
puts "=" * 10
puts net_profit(inventory = patsel_grocery[:foods])

# 4. 

# 5. 