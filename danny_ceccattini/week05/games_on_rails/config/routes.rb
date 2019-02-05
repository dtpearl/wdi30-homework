Rails.application.routes.draw do
  root :to => 'pages#home'

  get '/eight_balls' => 'eight_balls#form'
  get '/eight_balls/answer' => 'eight_balls#answer'

  get '/secret_numbers' => 'secret_numbers#form'
  get 'secret_numbers/answer' => 'secret_numbers#answer'
  get 'secret_numbers/win' => 'secret_numbers#win'
  get 'secret_numbers/win' => 'secret_numbers#lose'
end
