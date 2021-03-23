Rails.application.routes.draw do
  root 'home#index'
  resources :users
  get '/index', to:'home#index'
  get '/signup', to:'users#user'
  post '/create', to:'users#create'
  get '/articles', to:'main#index'
  post '/login', to:'sessions#create'
  post '/logout', to:'sessions#destroy'
  get '/logged_in', to:'sessions#is_logged_in?'
end
