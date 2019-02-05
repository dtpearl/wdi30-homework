class OceansController < ApplicationController
    def home
        @oceans = Ocean.all
    end

    def show
        @ocean = Ocean.find params[:id]
    end

    def new
    end
    
    def create
        ocean = Ocean.new
        ocean.name = params[:name]
        ocean.image = params[:image]
        ocean.area = params[:area]
        ocean.volume = params[:volume]
        ocean.ave_depth = params[:ave_depth]
        ocean.save
        redirect_to ocean_path(ocean.id)
    end

    def edit
        @ocean = Ocean.find params[:id]
    end

    def update
        ocean = Ocean.find params[:id]
        ocean.name = params[:name]
        ocean.image = params[:image]
        ocean.area = params[:area]
        ocean.volume = params[:volume]
        ocean.ave_depth = params[:ave_depth]
        ocean.save
        redirect_to ocean_path(ocean.id)
    end

    def destroy
        ocean = Ocean.find params[:id]
        ocean.destroy
        redirect_to oceans_path
    end

end