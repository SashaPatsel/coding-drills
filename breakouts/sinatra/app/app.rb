require 'rest-client'
require "sinatra"
# require "rest-client"


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
        print data.to_json
        data
    end

    get "/data" do 
        {"test": "string"}.to_json
    end    
end

