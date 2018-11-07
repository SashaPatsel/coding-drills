

  # 1. 
  def print_spaces()
    puts "=" * 20
  end  
  # 2.
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
    puts obj[:foods]
  end


  # 3 
  def add_props(obj, key, value)
    obj[:key] = value
    puts "You added #{obj[:key]}"
  end  


  # 4. 
  def net_profit(inventory)
    profit = 0
    cost = 0
    inventory.each do | item |
      profit += item[:sell_price]
      cost += item[:cost]
    end
    return profit - cost  
  end  

  # 5. 
  def goodbye(name)
    puts "Goodbye, #{name}! Come again soon."
  end

