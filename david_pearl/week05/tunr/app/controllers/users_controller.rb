class UsersController < ApplicationController

  before_action :check_for_login, :only => [:index]

  def index
    @Users = User.all
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new user_params
    if @user.save
      #
      session[:user_id] = @user.id
      redirect_to root_path
    else
      #Render new form so they can fix their mistakes.
      render :new
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end

end
