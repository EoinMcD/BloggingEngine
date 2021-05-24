Rails.application.routes.draw do
  get 'login/index'
  get 'about/Index'
  root 'home#index'
  resources :users, :login
  get '/index', to:'home#index'
  get '/signup', to:'users#user'
  post '/create', to:'users#create'
  get '/articles', to:'main#index'
  post '/loginUser', to:'login#create'
  get '/about', to:'about#index'
  get '/login', to:'login#index'
end
