# Rails

## Installation
#### For PC
- http://railsinstaller.org/en

#### For Mac
- `sudo gem install rails`

## Instructions
1. Run `rails new app` (where `app` is the name of our app)
2. Run `bundle install` from `/app`
    - If you see this error `Your Ruby version is 2.6.0, but your Gemfile specified 2.3.7`, or something similar, navigate to your Gemfile, and change the version specified at the top to the one you have on your device.
3. Run `rails s` or `rails server`
    - If you see the following error `You must use Bundler 2 or greater with this lockfile.`, run `gem update --system`
4. Navigate to localhost:3000 to see if it worked. (You'll see a welcome page)
5. Lets generate a controller for our movies. Run `rails g controller Movies`. Check out the controllers folder, you'll see a new file there.
6. In addition to creating the controller file, this will also create a new folder under views. Inside `views/movies` create `index.html.erb`.
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
  root "movies#index"
end

```
`movies` is reffering to our movies controller, where as `index` is referring to the view we just made. 