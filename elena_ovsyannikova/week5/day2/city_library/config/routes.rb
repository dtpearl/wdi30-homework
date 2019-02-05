Rails.application.routes.draw do
  root :to => 'cities#index'
  get '/cities' => 'cities#index'
  get '/cities/new' => 'cities#new'
  post '/cities' => 'cities#create'
  get '/cities/:id' => 'cities#show', :as => 'city'
  get '/cities/:id/edit' => 'cities#edit', :as => 'city_edit'
  post '/cities/:id' => 'cities#update'
  delete '/cities/:id' => 'cities#destroy'






  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
