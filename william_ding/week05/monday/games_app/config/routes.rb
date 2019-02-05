Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'pages#home'

  get '/magic' => 'magic#home'
  get '/magic/result' => 'magic#result'

  get '/secret' => 'secret#home'
  get '/secret/:guess' => 'secret#result'

  get '/rock' => 'rock#home'
  get '/rock/:play' => 'rock#result'

  get '/clown' => 'clown#home'
  get '/clown/result' => 'clown#result'
end
