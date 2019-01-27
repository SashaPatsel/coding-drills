class MovieController < ApplicationController
    skip_before_action :verify_authenticity_token
    def search
          data = RestClient.get("https://www.omdbapi.com/?t=#{params[:movie]}&y=&plot=short&apikey=trilogy")
          puts data
        #   data
        # @search = "data"
        # render :partial => "search-result"
        render :json => data
        # render "search-result"
    end

    def save
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

    def all
        
           # The user currently logged in
           logged_in_user = User.find(cookies[:userid])
           puts logged_in_user.movies
           # Send back all their movies as JSON
           render :json => logged_in_user.movies
    end 
end
