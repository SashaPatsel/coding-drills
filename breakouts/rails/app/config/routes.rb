Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "pages#index", as: "index"

  get "home" => "pages#home"

  resources :movies

  post "/api/signin/:username" => "user#signin"

  get "/api/user" => "user#current_user"

  get "/api/movies" => "movie#search"
  
end
