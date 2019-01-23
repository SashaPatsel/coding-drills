# Sinatra

## Fav-flix: A full-stack app built with Sinatra

### Introduction

Sinatra is a Ruby framework designed to easily create web applications. 

In terms of functionality, think of it as similar to Node with Express.

Check out some [applications build with Sinatra](http://sinatrarb.com/wild.html).

To learn the basics of Sinatra, we'll build a fairly simple application. In a nutshell, our application will allow a user to pick a username, search for movies, and then save his/her favorite movies (which will be associated specifically with that username).

This means we will cover:
- Configuring a Sinatra application
- Routing
- Connecting to a client
- ORM
- Database migration
- Data model associations

### Instructions

1. Run `Gem install bundle` (it does not matter where this command is run).

2. Navigate to sinatra/unsolved/app

3. Run `bundle init`. This will create a `Gemfile` for you. Think of this as our package.json. It is where we will list our app's dependencies.

4. These are our app's dependencies:
```ruby

# DEPENDENCIES
# Lets us hit external API
gem 'rest-client'
# The backbone. With Sinatra, we can easily set up our routes. Think of it as express for Ruby
gem "sinatra"
# DB
gem "mysql2"
# ORM
gem 'sinatra-activerecord'
# Task-automater
gem 'rake'
# Get/set cookies
gem "sinatra-contrib"
# Sends responses as JSON
gem "json"

```
Copy the above code and paste it inside you gemfile. If you are curious about what you are adding to your app, please refer to the comments above each dependency.

5. From the root of your app, run `bundle install`. This will read our `Gemfile` and install all the dependencies we've listed within it. You shoulde see `Gemfile.lock` in your app's root once this command has run. 

6. At your app's root, create the files `app.rb` and `config.ru`

7. In `config.run`, write the following code. 

```ruby
require "./app"

run HiSinatra

```

This code will allow us to start our app by running `rackup` from our project's root.

8. Let's require all the packages we've installed for future use. In `app.rb`, write the following code: 
```ruby
# DEPENDENCIES
# Lets us hit external API
require 'rest-client'
require "sinatra/base"
require "sinatra/cookies"
require "json"
require "mysql2"
require 'sinatra/activerecord'
```

9. Let's test our app to see if we've set everything up correctly to this point. Let's instantiate the classs that will contain all of our routes.

```ruby
class HiSinatra < Sinatra::Base

end

```

What we're doing here is making a new class called HiSinatra (it does not need to be called that), and building it on top of Sinatra's Base class. Put more simply though, we're creating a class where we'll define our routes. 

Inside of the class we just created, we can define routes like so:

```ruby

get "/" do
    "Hello World"
end

```

If you write the above code within the class we defined in this step, and then run `rackup` from the command line, you should see a page with "hello world" written on it at localhost:9292. 

If you are able to see "hello world" on your browser at localhost:9292, you've done everything correctly up to this point.

10. Now let's build out our file structure:

<img src= "file_structure.png">

Replicate the above file structure. This includes the following:

- Create a folder `db`
- Create a folder `models`
    - Within models, create `movie.rb`
    - Within models, create `user.rb`
- Create a folder `views`
    - Within views, create `index.erb`
    - Within views, create `home.erb`
- The public folder is already provided for you. 

11. 