Rails.application.routes.draw do
  get 'login/index'
  get 'about/Index'
  root 'home#index'
  resources :users, :sessions
  get '/index', to:'home#index'
  get '/signup', to:'users#user'
  post '/create', to:'users#create'
  get '/articles', to:'main#index'
  post '/log', to:'sessions#create'
  get '/about', to:'about#Index'
  get '/loginUser', to:'login#index'
end
