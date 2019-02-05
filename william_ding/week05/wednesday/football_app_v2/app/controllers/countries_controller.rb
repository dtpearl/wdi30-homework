class CountriesController < ApplicationController
  def index
    @countries = Country.all
  end

  def show
    @country = Country.find params[:id]
    @teams = Team.all
  end
end
