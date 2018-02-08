class Api::FollowsController < ApplicationController
  def create

    # sleep(1)

    @follow = current_user.out_follows.create!(followee_id: params[:user_id])
  #  @number_followee = Follow.where("followee_id = ?",params[:user_id]).count

    render :show

  end




  def destroy
    # sleep(1)
    @follow = current_user.out_follows.find_by(followee_id: params[:user_id])
  #  @number_followee = Follow.where("followee_id = ?",params[:user_id]).count
    @follow.destroy!

    render :show
  end
end
