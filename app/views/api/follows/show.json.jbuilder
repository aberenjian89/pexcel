# json.extract! @follow, @follow.followee_id , @follow.follower_id
#
#
followee =  Follow.where("followee_id = ?",current_user.id).count
followers = Follow.where("follower_id = ?",current_user.id).count



if followee > 0
  json.number_followee followee
else
  json.number_followee 0
end


if followers > 0
  json.number_followers followers
else
  json.number_followers 0
end