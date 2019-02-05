Rails.application.routes.draw do
  get 'session/new'
  root :to => 'films#index'
  resources :directors
  resources :films
end
