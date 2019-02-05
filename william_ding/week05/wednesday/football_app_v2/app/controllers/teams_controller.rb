class TeamsController < ApplicationController
  def index
    @teams = Team.all.order(:created_at)
  end

  def show
    @team = Team.find params[:id]
    @players = Player.all
  end

  def edit
    @team = Team.find params[:id]
  end

  def update
    team = Team.find params[:id]
    team.update strong_params
    redirect_to team
  end

  def new
    @team = Team.new
  end

  def create
    team = Team.create strong_params
    redirect_to team
  end

  def destroy
    team = Team.find params[:id]
    team.destroy
    redirect_to teams_path
  end

  private
  def strong_params
    params.require(:team).permit(:name, :city, :stadium, :title, :image, :country_id)
  end
end
