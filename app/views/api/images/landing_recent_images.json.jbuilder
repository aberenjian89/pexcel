@images.each do |image|
  json.set! image.id do
    json.id image.id
    json.name image.name
    json.set! :owner do 
      json.id   image.user.id
      json.owner_name image.user.username
      json.owner_email image.user.email
    end
    json.file url_for(image.image_file)
    json.set! :size do 
      json.width image.original_width 
      json.height image.orignal_height
    end
  end
end
