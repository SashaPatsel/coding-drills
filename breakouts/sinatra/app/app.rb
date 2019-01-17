
require 'nokogiri'
require 'rest-client'
require "sinatra"
require "mysql2"


Mysqlclient = Mysql2::Client.new(host: 'localhost',
                                 username: 'root',
                                 password: 'password',
                                 database: 'cat_db')

def get_cats
  Mysqlclient.query('SELECT * FROM cats', :as => :hash).to_a
end

puts get_cats

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
        puts data
        data
    end

    get "/data" do 
        {"test": "string"}.to_json
    end    

    get "/scrape" do
        doc = Nokogiri::HTML(open('http://www.nokogiri.org/tutorials/installing_nokogiri.html'))
        "hello"
        puts doc
    end
end

