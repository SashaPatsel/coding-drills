require "./helpers"

include Helpers


patsel_grocery = {
  :owner => "Sasha P",
  :location => "San Francisco",
  :num_stores => 8,
  :foods => ["beans", "cream cheese", "hummus", "guacamole", "cookies", "pizza", "twix", "peach"]
}


convert_items_to_obj(patsel_grocery)