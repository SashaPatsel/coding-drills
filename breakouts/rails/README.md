# Rails

## Installation
#### For PC
- http://railsinstaller.org/en

#### For Mac
- `sudo gem install rails`


## Resources 
https://www.youtube.com/watch?v=pPy0GQJLZUM&t=801s
https://www.railstutorial.org/book 

## Instructions
1. Run `rails new app` (where `app` is the name of our app)
    - Add `gem 'mysql2'` to your gem file
    - Add `gem 'jquery-rails'` to your Gemfile
2. Run `bundle install` from `/app`
    - If you see this error `Your Ruby version is 2.6.0, but your Gemfile specified 2.3.7`, or something similar, navigate to your Gemfile, and change the version specified at the top to the one you have on your device.
3. Run `rails s` or `rails server`
    - If you see the following error `You must use Bundler 2 or greater with this lockfile.`, run `gem update --system`
4. Navigate to localhost:3000 to see if it worked. (You'll see a welcome page)
5. Lets generate a controller for our pages. Run `rails g controller Pages`. Check out the controllers folder, you'll see a new file there.
    - `rails g controller User`
    - `rails g controller Movie`
6. In addition to creating the controller file, this will also create a new folder under views. Inside `views/pages` create `index.html.erb`.
7. Before we populate that view, let's add Bootstrap's CDN. Inside of `views/layouts` is a file called `application.html.erb`. Inside of the file is the following line of code: `<%= yield %>`. This is similar to `{{{body}}}` in Handlebars. All other views will build on this one. Therefore, we only need to add our CDNs to one place.  
```html

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">

<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

```

8. Navigate to `config/routes.rb`. This is where we will render our view. 
```ruby
Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "pages#index"
end

```
`pages` is reffering to our movies controller, where as `index` is referring to the view we just made. 

9. in `config/database.yml`
```yml

default: &default
  host: localhost
  username: root 
  password: password
  adapter: mysql2
  host: 
  pool: <%= ENV.fetch("RAILS_MAX_THREADS") { 5 } %>
  timeout: 5000

development:
  <<: *default
  database: "rails_db"

# Warning: The database defined as "test" will be erased and
# re-generated from your development database when you run "rake".
# Do not set this db to the same as development or production.
test:
  <<: *default
  database: db/test.mysql2

production:
  <<: *default
  database: db/production.mysql2

```
Then, in musql workbench, create the database `rails_db`

10. Run `rails g model User`, `rails g model Movie` and `rails g model Movie_User`

Then, inside of `db/migrate`

```ruby
class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do | t | 
      t.string :movie_name
      t.string :movie_poster
      t.string :movie_year 
      t.datetime :created_at
      t.datetime :updated_at 
    end
  end
end

```

```ruby

class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do | t |
      t.string :username
      t.datetime :created_at
      t.datetime :updated_at 
    end
  end
end
```


```ruby
class CreateMovieUsers < ActiveRecord::Migration[5.2]
  def change 
    create_table :movies_users do | t | 
      t.integer :user_id
      t.integer :movie_id
    end
  end
end


```

11. Run `rake db:migrate`. Then check MySQL workbench to see if the content is there. 

12. Paste HTML/JS/CSS

13. Write `resources :movies` in `routes.rb`. Then run `rake routes`. We can match these given routes in our controllers. 





* `rake routes` shows you all the routes in your app. 