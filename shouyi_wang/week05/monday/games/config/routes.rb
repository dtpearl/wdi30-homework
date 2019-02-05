Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => 'pages#home'
  get '/home' => 'pages#home'
  get '/magic' => 'magic#game'
  get '/secret' => 'secret#game'
  get '/rock' => 'rock#game'

  get 'magic/answer' => 'magic#answer'
  get 'secret/answer' => 'secret#answer'
end
