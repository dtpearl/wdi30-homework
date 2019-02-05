Rails.application.routes.draw do
  root :to => 'pages#home'

  # Magic 8 Ball
  get '/games/magic_8_ball/' => 'games#magic_8_ball'
  get '/games/magic_8_ball/result' => 'games#magic_8_ball_fortune'

  # Secret Number
  get '/games/secret_number' => 'games#secret_number'
  get '/games/secret_number/result' => 'games#secret_number_result'

  # Rock Paper Scissors
  get 'games/rock_paper_scissors/' => 'games#rock_paper_scissors_play'
  get '/games/rock_paper_scissors/result' => 'games#rock_paper_scissors_result'
end



# Magic 8 Ball
#
# Magic 8 ball takes user's questions from the the URL as params and returns a positive or negative answer.
#
# Secret Number
#
# Users click a number between 1 and 10. The controller validates the guess and renders the win or lose view.
#
# Rock Paper Scissors
#
# Create a route that goes from /games/rock_paper_scissors/:throw to games#rock_paper_scissors_play
# Use params[:throw] as a user's choice
# Compare the 2! If users throw matches the apps throw, the user wins.
# i.e. If a user throws rock http://localhost:3000/games/rock_paper_scissors/rock and the server picks rock player wins! (Yes, I know that is not how RPS works) Bonus: Set the win or lose condition based on the real rules of Rock Paper Scissors.
