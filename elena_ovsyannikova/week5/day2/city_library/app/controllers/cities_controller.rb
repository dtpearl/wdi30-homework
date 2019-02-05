class CitiesController < ApplicationController
  def index
    @cities = City.all
  end

  def show
    @city = City.find params[:id]
  end

  def new
  end

  def create
    city = City.new
    city.name= params[:name]
    city.image= params[:image]
    city.population= params[:population]
    city.square= params[:square]
    city.country= params[:country]
    city.save
    redirect_to city_path(city.id)
  end

  def edit
    @city = City.find params[:id]
  end

  def update
    city = City.find params[:id]
    city.name= params[:name]
    city.image= params[:image]
    city.population= params[:population]
    city.square= params[:square]
    city.country= params[:country]
    city.save
    redirect_to city_path(city.id)

  end

  def destroy
    city = City.find params[:id]
    city.destroy
    redirect_to cities_path

  end



end
