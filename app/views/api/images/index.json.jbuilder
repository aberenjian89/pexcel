
current_user.images.each do |image|
  json.set! image.id do
    json.extract! image, :id,:img_location,:img_title,
                  :img_desc, :author_id, :date_taken, :category,asset_path(:img.url)
  end
end
