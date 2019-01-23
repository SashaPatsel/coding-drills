
# DEPENDENCIES
# Lets us hit external API
require 'rest-client'
# The backbone. With Sinatra, we can easily set up our routes. Think of it as express for Ruby
require "sinatra/base"
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


class HiSinatra < Sinatra::Base
    helpers Sinatra::Cookies
    
    # Let's us see errors
    configure :production, :development do
        enable :logging
    end
    
    # RENDER VIEWS
    # Render the landing page
    get "/" do
        # We can simply refer to our HTML (stored in this app as .erb files) with the following syntax.
        erb :index
    end    
    
    # Render the home page
    get "/home" do
        erb :home
    end

    # API ROUTES
    
    # Query OMDBs API for a single movie. Return the results to the client as JSON.
    get "/api/movies/:movie" do 
        # Informs the server that we'd like to return json
        content_type :json
        data = RestClient.get("https://www.omdbapi.com/?t=#{params[:movie]}&y=&plot=short&apikey=trilogy")
        puts data
        data
    end    

    # Save a particular movie
    post "/api/movies/save" do 
        logged_in_user = User.find(cookies[:userid])

        logged_in_user.movies << Movie.create({
            movie_name: params[:name],
            movie_poster: params[:poster],
            movie_year: params[:year]
        })

        
        logged_in_user.movies.each do | movie |
            puts movie.id
        end
        puts request.body
    end

    # Get back all of a user's movies
    get "/api/movies/user/all" do 
        # Informs the server that we'd like to return json
        content_type :json
        # The user currently logged in
        logged_in_user = User.find(cookies[:userid])
        puts logged_in_user.movies
        # Send back all their movies as JSON
        logged_in_user.movies.to_json
    end
    # Signs a user up if they haven't already, signs them in if their username exists
    post "/api/signin/:username" do
        # Check to see if username exists. If it does, log them in. If not, sign them up.
        check_user = User.where({"username": params[:username]})
        if check_user[0]
            # Send the user back as a response
            check_user[0]
            # Store the existing user's id as a cookie
            cookies[:userid] = check_user[0].id         
            puts cookies
        else   
            puts "================================"
            puts params[:username]
            # Create new user
            new_user = User.create({username: params[:username]})
            # Send the new user's data as json to client
            new_user
            # Set the new user's id as a cookie
            cookies[:userid] = new_user.id
            puts cookies
        end
    end

    #  Get a user's info (in this case, just their username).
    get "/api/user" do
        # Informs the server that we'd like to return json
        content_type :json
        # Send back the cookies as json
        # cookies.to_json
        logged_in_user = User.find(cookies[:userid])
        if (logged_in_user)
            # Send a JSON response with the user's info.
            logged_in_user.to_json
        else 
            # Send this json back if the user is not logged in
            {"error": "Please sign in first"}  
        end 
    end   
    
end



