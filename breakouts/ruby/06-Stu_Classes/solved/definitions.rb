class Store 
    attr_accessor :store_name, :location, :category, :items

    def initialize(store_name, location, category, items)
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

    def add_items(item)
        @items += item
    end

    def remove_items(item)
        @items -= item
    end   

end

class item
    attr_accessor :item_name, :price, :stock

    def initialize(item_name, price, stock)
        @item_name = item_name
        @price = price
        @stock = stock
    end

    def set_price(new_price)
        @price = new_price
    end

    def less_stock(amount)
        @stock -= amount
    end

    def add_stock(amount)
        @stock += amount
    end

end