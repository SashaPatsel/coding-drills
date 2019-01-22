
# DEPENDENCIES
# Lets us hit external API
require 'rest-client'
# The backbone. With Sinatra, we can easily set up our routes. Think of it as express for Ruby
require "sinatra"
require "sinatra/cookies"
require "json"
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

# test_user = User.find(1)
# puts test_user.movies

# Gets all movie ids associated with one user
# test_user.movies.each do | movie |
#     puts movie.id
# end

# Add a new movie to be associated with a user
# test_user.movies << Movie.create({
#     movie_name: "Chicken little",
#     movie_poster: "http://www.gstatic.com/tv/thumb/v22vodart/12628458/p12628458_v_v8_an.jpg",
#     movie_year: "2016"
#   })


class HiSinatra < Sinatra::Base
    helpers Sinatra::Cookies

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

    get "/movies/:movie" do 
        movie_url = 'https://www.omdbapi.com/?t=&y=&plot=short&apikey=trilogy'
        data = RestClient.get('https://www.omdbapi.com/?t=&y=&plot=short&apikey=trilogy')
        puts data
        data.to_json
    end    


    post "/signin/:username" do
        # Check to see if username exists. If it does, log them in. If not, sign them up.
        check_user = User.where({"username": params[:username]})
        puts "check_user"
        puts check_user
        if check_user[0]
            puts "======="
            puts check_user[0].id
            puts "======="
            puts check_user[0].id
            check_user[0]
            cookies[:userid] = check_user[0].id
            puts cookies
        else   
            puts "================================"
            puts params[:username]
            # Create new user
            new_user = User.create({username: params[:username]})
            # Send the new user's data as json to client
            new_user
            cookies[:userid] = new_user.id
            puts cookies
        end

        # # grab username from form at "/"
        # puts "================================"
        # puts params[:username]
        # # Create new user
        # new_user = User.create({username: params[:username]})
        # # Send the new user's data as json to client
        # new_user
        # cookies[:userid] = new_user.id
        # puts cookies
        
    end

    get "/home" do
        erb :home
    end

    get "/user" do
        # Informs the server that we'd like to return json
        content_type :json
        # Send back the cookies as json
        # cookies.to_json
        logged_in_user = User.find(cookies[:userid])
        if (logged_in_user)
            logged_in_user.to_json
        else 
            {"error": "Please sign in first"}  
        end 
    end   
    
end



