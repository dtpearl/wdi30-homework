Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root :to => 'pages#welcome'

  get '/' => 'pages#welcome'

  get '/magic8' => 'magic8#question'
  get '/magic8/response' => 'magic8#m8_response'

  get '/lucky' => 'lucky#guess'
  get '/lucky/response' => 'lucky#lucky_response'

  get '/rockpaper' => 'rockpaper#choice'
  get '/rockpaper/response' => 'rockpaper#rock_response'
  
end
