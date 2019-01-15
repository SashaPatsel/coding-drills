class Store 
    attr_accessor :store_name, :location, :category, :items

    def initialize(store_name = "No name yet", location = "No location set yet", category = "No category set yet", items = [])
        @store_name = store_name
        @location = location
        @category = category
        @items = items
    end

    def print_bio
        puts "Store store name: #{@store_name}"
        puts "Store category: #{@category}"
        puts "Store location: #{@location}"
    end

    def print_inventory
        @items.each do | item |
            puts item.item_name
        end    
    end

    def add_item(item)
        @items += [item]
    end

    def remove_item(item)
        @items -= [item]
    end   
end

class Item
    attr_accessor :item_name, :price, :stock

    def initialize(item_name = "No name yet", price = 0, stock = 0)
        @item_name = item_name
        @price = price
        @stock = stock
    end

    def set_price(new_price)
        @price = new_price
    end

    def less_stock(amount)
        @stock -= [amount]
    end

    def add_stock(amount)
        @stock += [amount]
    end
end