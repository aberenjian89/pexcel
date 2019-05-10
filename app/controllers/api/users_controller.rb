class Api::UsersController < ApplicationController
  def index
    @users = User.all
    render :index
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
        render :show
    else
        render json: @user.errors.full_messages, status: 422
    end
  end

  def upload_home_user_avatar
    current_user.avatar.attach(params["data"]["avatar"])
    if current_user.save
      @user = current_user
      render :show 
    else
      render json: @user.errors.full_messages, status: 422 
    end
  end

  def remove_home_user_avatar 
    current_user.avatar.purge
    if current_user.save 
      @user = current_user
      render :show 
    else 
      render json: @user.errors.full_message, status: 422
    end
  end

  def update
    @user = User.find_by(id: params[:id])
    if @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_message, status:  422
    end
  end


  def show
    @user = User.find_by(id: params[:id])
    if @user
      render :show
    else
      render json ["Not able to find user"], status: 422
    end
  end

  private
  def user_params
    params.require(:data).permit(:username,:first_name,:last_name,:password,:email,:avatar,:short_thought)
  end
end
