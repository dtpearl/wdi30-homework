Rails.application.routes.draw do
  get 'session/new'
  #get 'users/new' # get rid of line
  root :to => 'pages#home'
  resources :users, :only => [:new, :create, :index]

  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'
end
