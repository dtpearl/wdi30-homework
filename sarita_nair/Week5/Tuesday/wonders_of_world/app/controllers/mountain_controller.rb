class MountainController < ApplicationController
 def list
   @mountains = Mountain.all
 end
 def view
   @mountain = Mountain.find params[:id]
 end
 def edit
   @mountain = Mountain.find params[:id]
 end
 def create
   mountain = Mountain.new
   mountain.name = params[:name]
   mountain.image = params[:image]
   mountain.height = params[:height]
   mountain.state = params[:state]
   mountain.country = params[:country]
   mountain.save
   redirect_to "/mountain/#{mountain.id}"
 end
 def update
   mountain = Mountain.find params[:id]
   mountain.name = params[:name]
   mountain.image = params[:image]
   mountain.height = params[:height]
   mountain.state = params[:state]
   mountain.country = params[:country]
   mountain.save
   redirect_to "/mountain/#{mountain.id}"
 end
 def destroy
   mountain = Mountain.find params[:id]
   mountain.destroy
   redirect_to "/list"
 end
end
