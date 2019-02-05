Rails.application.routes.draw do
  root :to => 'mountain#list'
  get '/list' => 'mountain#list'
  get '/mountain/new'  => 'mountain#new'
  get '/mountain/:id'  => 'mountain#view'
  get '/mountain/:id/edit'  => 'mountain#edit'
  post '/mountain/:id'  => 'mountain#update'
  post '/mountain'  => 'mountain#create'
  delete '/mountain/:id' => 'mountain#destroy'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
