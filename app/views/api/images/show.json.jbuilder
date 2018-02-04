

  json.id @image.id
  json.img_title @image.img_title
  json.img_desc @image.img_desc
  json.img_url @image.img_location
  json.date_taken @image.date_taken
  json.category @image.category
  json.img_url asset_path(@image.img.url)
