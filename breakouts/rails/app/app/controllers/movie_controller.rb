class MovieController < ApplicationController

    def search
          # Informs the server that we'd like to return json
          content_type :json
          data = RestClient.get("https://www.omdbapi.com/?t=#{params[:movie]}&y=&plot=short&apikey=trilogy")
          puts data
          data
    end

    def new
         # Identify the logged in user
         logged_in_user = User.find(cookies[:userid])
         # Create a new movie in our db associated to the logged in user
         logged_in_user.movies << Movie.create({
             movie_name: params[:name],
             movie_poster: params[:poster],
             movie_year: params[:year]
         })
         logged_in_user.movies.each do | movie |
             puts movie.id
         end
         puts "Movie saved"
    end

    def get_all
           # Informs the server that we'd like to return json
           content_type :json
           # The user currently logged in
           logged_in_user = User.find(cookies[:userid])
           puts logged_in_user.movies
           # Send back all their movies as JSON
           logged_in_user.movies.to_json
    end 
end
