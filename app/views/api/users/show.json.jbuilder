json.id @user.id
json.first_name @user.first_name
json.last_name @user.last_name
json.username @user.username
json.email @user.email
json.avatar_url url_for(@user.avatar) if @user.avatar.attached? 
json.member_date @user.created_at
json.last_login @user.updated_at
