Rails.application.routes.draw do
  root :to => 'pages#home'

  get '/magic8' => 'magic8#input'
  get '/magic8/result' => 'magic8#result'

  get '/secretnumber' => 'secretnumber#input'
  get '/secretnumber/result' => 'secretnumber#result'

  get '/rockpaperscissors' => 'rockpaperscissors#input'
  get '/rockpaperscissors/result' => 'rockpaperscissors#result'

end
