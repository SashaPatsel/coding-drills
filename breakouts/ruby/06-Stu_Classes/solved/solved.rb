require "./definitions"
require "./helpers"

safeway = Store.new("Safeway", "San Francisco", "Grocery")

hummus = Item.new("Hummus", 4.50, 300)

cream_cheese = Item.new("Cream cheese", 1.95, 1237)

coffee_creamer = Item.new("Coffee cream", 2.45, 568)

safeway.add_item(hummus)
safeway.add_item(cream_cheese)
safeway.add_item(coffee_creamer)

safeway.print_inventory()

