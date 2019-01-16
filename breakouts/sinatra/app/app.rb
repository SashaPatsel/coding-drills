require "sinatra"

class HiSinatra < Sinatra::Base
    get "/" do
        "Hey Sinatra"
        erb :index
    end    

    get "/thing/:thing" do 
        "Yo yo yo #{params[:thing]}"
    end    

    get "/data" do 
        {"test": "string"}.to_json
    end    
end

