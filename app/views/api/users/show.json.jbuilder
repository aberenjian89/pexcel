
json.id @user.id
json.username @user.username
json.img_url @user.img_url
json.number_followers Follow.where("followeer_id = ?",@user.id).count
json.number_followee Follow.where("follower_id = ?",@user.id).count
