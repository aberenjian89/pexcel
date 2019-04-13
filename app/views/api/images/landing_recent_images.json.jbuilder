@images.each do |image|
  json.set! image.id do
    json.id image.id
    json.name image.name
    json.file url_for(image.image_file)
    json.size FastImage.size(url_for(image.image_file))
  end
end
