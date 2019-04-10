class Api::ImagesController < ApplicationController
  def index
    @images = Image.all
  end

  def recent_images
    @images = Image.all
  end

  def create
    debugger
    @images = image_params
    params[:images].each do |image|
      @image = Image.new(image_params)
      if !@image.save 
          render json: @image.errors.full_messages, status: 500
      end 
    end
    # @image = Image.new(image_params)
    # @image.owner_id = current_user.id
    # if @image.save
    #   render  :show
    # else
    #   render json: @image.errors.full_messages, status: 422
    # end
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
      render :show
    else
      render json: @image.errors.full_messages, status: 422
    end
  end

  def show
    @image = Image.find(params[:id])
    if @image
      render :show
    else
      render json: @image.errors.full_messages, status: 422
    end
  end


  private
  def image_params
    params.require(:data).permit(images: [])
  end
  def image_params_update
    params.require(:img).permit(:img_title,:img_location,:author_id, :img_desc,:date_taken,:category)
  end
end
