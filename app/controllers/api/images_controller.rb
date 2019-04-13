class Api::ImagesController < ApplicationController
  def index
    @images = Image.all
  end

  def recent_images
    @images = Image.all
  end

  def create
    @image = current_user.images.create(image_params)
    if @image.save
      render json: "Images Uploaded Successful",status: 200
    else
      render json: @image.errors.full_message, status: 500
    end
  end

  def home_user_gallery
    @images = current_user.images
    render :user_gallery
  end

  def update
    @image = current_user.images.find(params[:id])
    if @image.update(image_params_update)
      render :show
    else
      render json: @image.errors.full_messages, status: 422
    end
  end

  def edit
    @image = current_user.images.find(params[:id])
    if @image
      render :show
    else
      render json: @image.errors.full_messages, status: 422
    end
  end

  def destroy
    @image = current_user.images.find(params[:id])
    if @image.destroy
      @images = current_user.images
      render :user_gallery
    else
      render json: @image.errors.full_messages, status: 422
    end
  end

  def show
    # @image = Image.find(params[:id])
    # if @image
    #   render :show
    # else
    #   render json: @image.errors.full_messages, status: 422
    # end
  end


  private
  def image_params
    params.require(:image).permit(:name, :image_file)
  end
  def image_params_update
    params.require(:img).permit(:img_title,:img_location,:author_id, :img_desc,:date_taken,:category)
  end
end
