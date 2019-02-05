class PlayersController < ApplicationController
  def home
  end

  def index
    @players = Player.all
  end

  def show
    @player = Player.find params[:id]
  end

  def edit
    @player = Player.find params[:id]
  end

  def update
    player = Player.find params[:id]
    player.name = params[:name]
    player.nation = params[:nation]
    player.team = params[:team]
    player.overall = params[:overall]
    player.pac = params[:pac]
    player.sho = params[:sho]
    player.pas = params[:pas]
    player.dri = params[:dri]
    player.def = params[:def]
    player.phy = params[:phy]
    player.image = params[:image]
    player.save

    redirect_to(player_path(player.id))
  end

  def new
  end

  def create
    player = Player.new
    player.name = params[:name]
    player.nation = params[:nation]
    player.team = params[:team]
    player.overall = params[:overall]
    player.pac = params[:pac]
    player.sho = params[:sho]
    player.pas = params[:pas]
    player.dri = params[:dri]
    player.def = params[:def]
    player.phy = params[:phy]
    player.image = params[:image]
    player.save

    redirect_to(player_path(player.id))
  end

  def destroy
    player = Player.find params[:id]
    player.destroy
    redirect_to(players_path)
  end

  def search
    player = Player.find_by name: params[:name]

    redirect_to("/") if player == nil

    redirect_to(player_path(player.id)) if player != nil
  end
end
