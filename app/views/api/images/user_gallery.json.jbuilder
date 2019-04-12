@images.each do |img|
  json.set! img.id do
    json.id img.id
    json.name img.name
    json.file url_for(img.image_file)
    json.size FastImage.size(url_for(img.image_file))
  end
end