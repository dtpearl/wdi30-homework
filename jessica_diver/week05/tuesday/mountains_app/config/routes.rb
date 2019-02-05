Rails.application.routes.draw do
  root :to => 'pages#home'
  get '/' => 'pages#home'

  get '/mountains/new' => 'mountains#new'
  post '/mountains' => 'mountains#create'

  get '/mountains' => 'mountains#index'
  get '/mountains/:id' => 'mountains#show', :as => 'mountain'

  get 'mountains/:id/edit' => 'mountains#edit', :as =>'mountain_edit'
  post 'mountains/:id' => 'mountains#update'


  delete 'mountains/:id' => 'mountains#destroy'
end
