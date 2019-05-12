class AddColumnToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :username, :string, null: false
    add_column :users, :password_digest, :string, null: false
    add_column :users, :email, :string, null: false
    add_column :users, :session_token, :string, null: false 
  end
end
