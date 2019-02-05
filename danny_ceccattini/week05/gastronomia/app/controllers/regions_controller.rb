class RegionsController < ApplicationController
  def index
    @regions = Region.all
  end

  def show
    @region = Region.find params[:id]
  end

  def new
    @region = Region.new
  end

  def create
    region = Region.create region_params
    redirect_to region_path(region.id)
  end

  def edit
    @region = Region.find params[:id]
  end

  def update
    region = Region.find params[:id]
    region.update region_params
    redirect_to region
  end

  def destroy
    region = Region.find params[:id]
    region.destroy
    redirect_to regions_path
  end

  private
  def region_params
    params.require(:region).permit(:name, :capital, :population, :flag, :image)
  end

end
