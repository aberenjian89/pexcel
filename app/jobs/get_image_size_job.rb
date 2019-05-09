class GetImageSizeJob < ApplicationJob
  queue_as :default

  require 'fastimage'
  def perform(image_id = nil )
    if image_id
      image = Image.find_by(id: image_id)
      size = FastImage.size(image.image_file.service_url)
      if size
        image.original_width = size[0]
        image.original_height = size[0]
        image.save
      else
        puts "Not able to get image size for image with ID of  #{image_id}"
      end
    end
  end
end