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

5. From the root of your app, run `bundle install`. This will read our `Gemfile` and install all the dependencies we've listed within it.

6. 