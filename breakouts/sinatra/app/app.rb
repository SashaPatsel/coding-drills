require "sinatra"

class HiSinatra < Sinatra::Base
    get "/" do
        "Hey Sinatra"
    end    
end