json.currentUser do
  json.username @user.username
  json.img_url @user.img_url
end