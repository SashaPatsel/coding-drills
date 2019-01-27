class PagesController < ApplicationController

    def home 

        # The user currently logged in
        logged_in_user = User.find(cookies[:userid])
        puts logged_in_user.movies

        @movies = logged_in_user.movies
        # Send back all their movies as JSON
        render "home"
    end
end
