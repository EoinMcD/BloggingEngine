# frozen_string_literal: true

Rails.application.routes.draw do
 
  
  root 'home#index'

  resources :users

  get '/index',to:'home#index'
  get '/signup', to:'users#user'
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
