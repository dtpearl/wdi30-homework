class MountainsController < ApplicationController
  def index
    @mountains = Mountain.all
  end

  def show
    @mountain = Mountain.find params[:id]
  end

  def new
  end

  def create
    mountain = Mountain.new
    mountain.name = params[:name]
    mountain.image = params[:image]
    mountain.country = params[:country]
    mountain.height = params[:height]
    mountain.mountain_range = params[:mountain_range]
    mountain.age = params[:age]
    mountain.save # INSERT, will set a new ID
    redirect_to mountain_path(mountain.id)
  end

  def edit
    @mountain = Mountain.find params[:id]
  end

  def update
    mountain = Mountain.find params[:id]
    mountain.name = params[:name]
    mountain.image = params[:image]
    mountain.country = params[:country]
    mountain.height = params[:height]
    mountain.mountain_range = params[:mountain_range]
    mountain.age = params[:age]
    mountain.save # UPDATE
    redirect_to mountain_path(mountain.id)
  end

  def destroy
    # DELETE /mountains/:id
    mountain = Mountain.find params[:id]
    mountain.destroy # Galactus
    redirect_to mountains_path
  end
end
