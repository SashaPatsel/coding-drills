class Store 
    attr_accessor :store_name, :location, :category, :items

    def initialize(store_name, location, category, items)
        @store_name = store_name
        @location = location
        @category = category
        @items = items
    end

    def add_items(item)
        @items += item
    end

    def remove_items(item)
        @items -= item
    end    



end