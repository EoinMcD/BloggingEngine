# frozen_string_literal: true

Rails.application.routes.draw do
  root 'home#index'
  resources :users
  get '/index', to:'home#index'
  get '/signup', to:'users#user'
  post '/create', to:'users#create'
end
