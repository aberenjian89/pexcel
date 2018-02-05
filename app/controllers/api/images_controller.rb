
class Api::ImagesController < ApplicationController
  def index
    @images = Image.all
  end

  def recent_images
    @images = Image.all
  end

  def create
    @image = Image.new(image_params)
    @image.author_id = current_user.id
    if @image.save!
      render :show
    else
      render json: @image.errors.full_messages
    end
  end

  def update
    debugger
    @image = current_user.images.find(params[:id])
    if @image.update(image_params_update)
      debugger
      render :show
    else
      debugger
      render json: @image.errors.full_message
    end
  end

  def edit
    @image = current_user.images.find(params[:id])
    if @image
      render :show
    else
      render json: @image.errors.full_message
    end
  end

  def destroy
    ### Delete Image

  end

  def show
    @image = Image.find(params[:id])
    if @image
      render :show
    else
      render json: @image.errors.full_message
    end
  end


  private
  def image_params
    params.require(:image).permit(:img_title,:img_location,:author_id, :img_desc,:date_taken,:category, :img)
  end
  def image_params_update
    params.require(:img).permit(:img_title,:img_location,:author_id, :img_desc,:date_taken,:category)
  end
end
