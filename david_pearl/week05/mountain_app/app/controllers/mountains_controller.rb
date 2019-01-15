class MountainsController < ApplicationController

  def index
    @mountains = Mountain.all
    # Implicit return - renders index.html.erb
  end

  def show
    @mountain = Mountain.find params[:id]
  end

  def new
  end

  def create
    mountain = Mountain.new
    mountain.name = params[:name]
    mountain.country = params[:country]
    mountain.height = params[:height]
    mountain.mountain_range = params[:mountain_range]
    mountain.image = params[:image]
    mountain.save

    redirect_to mountain_path(mountain.id)
  end

  def edit
    @mountain = Mountain.find params[:id]
  end

  def update
    mountain = Mountain.find params[:id]
    mountain.name = params[:name]
    mountain.country = params[:country]
    mountain.height = params[:height]
    mountain.mountain_range = params[:mountain_range]
    mountain.image = params[:image]
    mountain.save # UPDATE DB record with the new information.

    redirect_to mountain_path(mountain.id)
  end

  def destroy
    # Deletes a mountain from the DB

    mountain = Mountain.find params[:id]
    mountain.destroy

    redirect_to mountains_path
  end
end
