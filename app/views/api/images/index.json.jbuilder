current_user.images.each do |image|

  json.set! image.id do
    # json.extract! image, :id,:img_location,:img_title,
    #               :img_desc, :author_id, :date_taken, :category,asset_path(img.url)
    json.id image.id
    json.img_location image.img_location
    json.img_title image.img_title
    json.img_desc image.img_desc
    json.author_id image.author_id
    json.date_taken image.date_taken
    json.category image.category
    json.img_url image.img.url
  end
end
