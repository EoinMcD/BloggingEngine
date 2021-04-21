Rails.application.routes.draw do
  get 'about/Index'
  root 'home#index'
  resources :users
  get '/index', to:'home#index'
  get '/signup', to:'users#user'
  post '/create', to:'users#create'
  get '/articles', to:'main#index'
  post '/login', to:'sessions#create'
  get '/about', to:'about#Index'
end
