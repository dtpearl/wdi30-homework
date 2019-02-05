Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/home' => 'secretnumber#home'
  get '/secretnumber' => 'secretnumber#secretnumber'
  get '/createsecretnumber' => 'secretnumber#createsecretnumber'
  get '/guess' => 'secretnumber#guess'
  get '/magic' => 'magic#magic'
  get '/prediction' => 'magic#prediction'

end
