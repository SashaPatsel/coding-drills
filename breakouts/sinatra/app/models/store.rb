Sequel.migration do
    up do
      create_table(:birds) do
        primary_key :id
        String :name, :null=>false
      end
    end
  
    down do
      drop_table(:birds)
    end
end