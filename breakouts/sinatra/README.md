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