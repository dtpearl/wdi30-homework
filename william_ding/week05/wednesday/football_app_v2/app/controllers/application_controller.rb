class ApplicationController < ActionController::Base
  def search
    if params[:player].present?
      player = Player.find_by name: params[:name]
      redirect_to player
    else
      team = Team.find_by name: params[:name]
      redirect_to team
    end


  end
end
