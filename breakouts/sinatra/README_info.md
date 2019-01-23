## Installation
- https://github.com/rbenv/rbenv
- http://codingpad.maryspad.com/2017/04/29/update-mac-os-x-to-the-current-version-of-ruby/ 
- VS code extensions:   
    - erb
    - In settings: `"emmet.includeLanguages": {"erb": "html"}`
- run `bundle init`
- Use `bundle install` rather than `gem install` to install dependencies to a single project rather than on your device.
- Active record setup https://gist.github.com/jtallant/fd66db19e078809dfe94401a0fc814d2
    - rake db:create_migration NAME=create_users_table (creates table for you)
    - populate the migration file after running the above command. Looks like this:

    ```ruby
      create_table :users do |t|
        t.string :fname
        t.string :lname
        t.string :email
        t.datetime :created_at
        t.datetime :updated_at
      end
    ```

## Running the program
- run `rackup` from project root

## Ideas
- Hit reddit API
- Serve up reddit's json to our client
- Store that data

## Other ideas
- Form to sign in as user 
    - Can log out/switch user
    - If not "signed in", you cant search movies
- Once "signed in", a user can search for movies. 
- Once they've searched for a movie, they can choose to save it.
- A user has many movies
- Movies belong to many users



## Database
1. Create a file called Rakefile
2. Run the following command: `db:create_migration NAME=<name_of_migration>`
    - This will automatically create a migrate folder inside of your db folder.
3. Populate your new file with the desired columns and validations
4. Run `rake db:migrate`
5. Create a model in /models. For example: models/user.rb It should look like this:
    ```ruby
    class User < ActiveRecord::Base
    end
    ```
6. Require the above file in app.rb
7. Create db/seeds.rb
8. Enter code similar to this (depending on what you put in your model)
```ruby
users = [
  {username: "Hermione_Granger"},
  {username: "Jon_Snow"}
]

users.each do |u|
  User.create(u)
end

```
