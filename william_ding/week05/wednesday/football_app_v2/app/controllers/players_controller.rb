class PlayersController < ApplicationController
  def index
    @players = Player.all.order(:id)
  end

  def show
    @player = Player.find params[:id]
  end

  def new
    @player = Player.new
  end

  def create
    player = Player.create strong_params
    redirect_to player
  end

  def edit
    @player = Player.find params[:id]
  end

  def update
    player = Player.find params[:id]
    player.update strong_params
    redirect_to player
  end

  def destroy
    player = Player.find params[:id]
    player.destroy
    redirect_to players_path
  end

  private
  def strong_params
    params.require(:player).permit(:name, :nation, :age, :rating, :position, :image, :team_id)
  end
end
