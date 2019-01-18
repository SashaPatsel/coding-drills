class CreateStoresTable < ActiveRecord::Migration[5.2]
  def change
    create_table :stores do |t|
      t.string :name
      t.string :location
      t.datetime :created_at
      t.datetime :updated_at
    end
  end
end
