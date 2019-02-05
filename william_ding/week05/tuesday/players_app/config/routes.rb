Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => 'players#home'

  get '/players' => "players#index"
  get '/players/new' => 'players#new', as: 'player_new'
  post '/players/new' => 'players#create'
  get 'players/:id' => "players#show", as: "player"
  get '/players/edit/:id' => "players#edit", as: "player_edit"
  post '/players/edit/:id' => 'players#update'
  delete '/players/:id' => 'players#destroy', as: 'player_delete'
  get '/search' => 'players#search'
end
