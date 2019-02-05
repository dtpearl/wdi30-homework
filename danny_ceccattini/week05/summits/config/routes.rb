Rails.application.routes.draw do
  root :to => 'mountains#home'
  get '/mountains' => 'mountains#index'
  # CREATING
  get 'mountains/new' => 'mountains#new'
  post '/mountains' => 'mountains#create'
  # SHOWING
  get 'mountains/:id' => 'mountains#show', :as => 'mountain'
  #EDITING
  get 'mountains/:id/edit' => 'mountains#edit', :as => 'mountain_edit'
  post 'mountains/:id' => 'mountains#update'
  # DESTROY
  delete 'mountains/:id' => 'mountains#destroy'

end
