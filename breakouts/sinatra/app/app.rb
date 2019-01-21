
# DEPENDENCIES
# Lets us hit external API
require 'rest-client'
# The backbone. With Sinatra, we can easily set up our routes. Think of it as express for Ruby
require "sinatra"
# DB
require "mysql2"
# ORM
require 'sinatra/activerecord'
# Models
require './models/user.rb'
require './models/movie.rb'

ActiveRecord::Base.establish_connection adapter: 'mysql2', database: 'sinatra_db', host: 'localhost', username: 'root', password: 'password'



# WITH NO ORM
# mysql = Mysql2::Client.new(host: 'localhost', username: 'root', password: 'password', database: 'sinatra_db')
# def get_items
#   MySQL.query('SELECT * FROM items', :as => :hash).to_a
# end
# puts get_items

test_user = User.find(1)
puts test_user.movies

# test_user.movies << Movie.create({
#     movie_name: "Chicken little",
#     movie_poster: "http://www.gstatic.com/tv/thumb/v22vodart/12628458/p12628458_v_v8_an.jpg",
#     movie_year: "2016"
#   })


class HiSinatra < Sinatra::Base
    get "/" do
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


    get "/reddit" do
        data = RestClient.get('https://www.reddit.com/r/animals/about')
        puts data
        erb :index
    end

    get "/movies" do 
        data = RestClient.get('https://www.omdbapi.com/?t=harry%20potter&y=&plot=short&apikey=trilogy')
        puts data
        data.to_json
    end    


    post "/signin" do
        puts "confirm"
        puts params[:username]
        redirect "/home"
    end

    get "/home" do
        erb :home
    end
    
end


