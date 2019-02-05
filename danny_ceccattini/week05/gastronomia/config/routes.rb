Rails.application.routes.draw do
  root :to => 'dishes#index'
  resources :dishes
  resources :regions
end
