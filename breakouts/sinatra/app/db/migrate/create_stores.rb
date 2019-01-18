
require 'active_record'
ActiveRecord::Base.establish_connection adapter: 'mysql2', database: 'sinatra_db' 

class CreateStores < ActiveRecord::Migration
    def change
        create_table :stores do | t | 
            t.string :name
            t.string :location

            t.timestamps
        end
    end
end