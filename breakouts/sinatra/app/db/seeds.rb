stores = [
  {name: 'Safeway', location: "San Francisco"},
  {name: "Trader Joe's", location: 'Oakland'}
]

stores.each do |u|
  Store.create(u)
end