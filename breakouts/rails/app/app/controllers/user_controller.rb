class UserController < ApplicationController
    skip_before_action :verify_authenticity_token

    def signin
        # Check to see if username exists. If it does, log them in. If not, sign them up.
        check_user = User.where({"username": params[:username]})
        if check_user[0]
            # Send the user back as a response
            check_user[0]
            # Store the existing user's id as a cookie
            cookies[:userid] = check_user[0].id         
            puts cookies
        else   
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

    def current_user
        # Informs the server that we'd like to return json
        # content_type :json
        # Send back the cookies as json
        # cookies.to_json
        logged_in_user = User.find(cookies[:userid])
        if (logged_in_user)
            puts "if hit"
            puts logged_in_user
            # Send a JSON response with the user's info.
            render :json => logged_in_user
        else 
            # Send this json back if the user is not logged in
            {"error": "Please sign in first"}  
        end 
    end
end
