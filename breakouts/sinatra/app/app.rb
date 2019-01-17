# For web scraping
require 'nokogiri'
# Lets us hit external API
require 'rest-client'
# The backbone. With Sinatra, we can easily set up our routes. Think of it as express for Ruby
require "sinatra"
# DB
require "mysql2"
# ORM
require "sequel"


mysql = Mysql2::Client.new(host: 'localhost', username: 'root', password: 'password', database: 'sinatra_db')


# def get_cats
#   MySQL.query('SELECT * FROM cats', :as => :hash).to_a
# end

# puts get_cats
DB = Sequel.connect(adapter: "mysql2",host: 'localhost', username: 'root', password: 'password', database: 'sinatra_db')


DB.create_table :items do
    primary_key :id
    String :name, unique: true, null: false
    Float :price, null: false
end

items = DB[:items]

items.insert(name: 'chicken', price: rand * 100)
items.insert(name: 'bacon', price: rand * 100)
items.insert(name: 'farley', price: rand * 100)

class HiSinatra < Sinatra::Base
    get "/" do
        "Hey Sinatra"
        erb :index
    end    

    get "/thing/:thing" do 
        "Yo yo yo #{params[:thing]}"
    end    

    get "/api" do
        data = RestClient.get('https://api.unsplash.com//photos/random?client_id=07dacab89ab64ea68532f6383a048daac380765c1f6e20a9b5e3d60961db4e2b&query=chicken')
        puts data
        data
    end

    get "/data" do 
        {"test": "string"}.to_json
    end    

    get "/scrape" do
        doc = Nokogiri::HTML(open('http://www.nokogiri.org/tutorials/installing_nokogiri.html'))
        "hello"
        puts doc
    end
end

