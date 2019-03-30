class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:data][:email],
                                     params[:data][:password])
    if @user
      login(@user)
      render :show
    else
      render json: ["Invalid Username and Password"], status: 422
    end
  end

  def destroy
    logout
  end
end
