class MountainsController < ApplicationController
  def home
  end

  def index
    @mountains = Mountain.all
  end

  def new
  end

  def create
    mountain = Mountain.new
    mountain.name = params[:name]
    mountain.range = params[:range]
    mountain.image = params[:image]
    mountain.height = params[:height]
    mountain.type = params[:type]
    mountain.location = params[:location]
    mountain.save

    redirect_to mountain_path(mountain.id)
  end

  def show
    @mountain = Mountain.find params[:id]
  end

  def edit
    @mountain = Mountain.find params[:id]
  end

  def update
    mountain = Mountain.find params[:id]
    mountain.name = params[:name]
    mountain.range = params[:range]
    mountain.image = params[:image]
    mountain.height = params[:height]
    mountain.type = params[:type]
    mountain.location = params[:location]
    mountain.save

    redirect_to mountain_path(mountain.id)
  end

  def destroy
    mountain = Mountain.find params[:id]
    mountain.destroy

    redirect_to mountains_path
  end
end
