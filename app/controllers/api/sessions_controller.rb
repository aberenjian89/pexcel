class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username],
                                     params[:user][:password])
    if @user
      login(@user)
      render :show
    else
      render json: ["Invalid Username and Password"]
    end
  end

  def destroy
    logout
  end
end
