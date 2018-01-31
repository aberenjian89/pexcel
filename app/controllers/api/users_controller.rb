class Api::UsersController < ApplicationController
  def index
    @users = User.all
    render :index
  end

  def create
    @user = User.new(user_params)
    @user.img_url = '../../resource/Default_User_Profile.png'
    if @user.save
      login(@user)
        render :show
    else
        render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find(id: params[:id])
    if @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_message
    end
  end

  private
  def user_params
    params.require(:user).permit(:username,:password,:email)
  end
end
