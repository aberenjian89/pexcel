class ChangeUserModel < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :username
    remove_column :users, :password_digest
    remove_column :users, :email
    remove_column :users, :session_token
    remove_column :users, :img_url

  end
end
