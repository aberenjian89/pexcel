class AddColumnToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :username, :string, null: false
    add_column :users, :password_digest, :string, null: false
    add_column :users, :email, :string, null: false
    add_column :users, :session_token, :string, null: false 
    add_column :users, :created_at, :datetime, null: false 
    add_column :users, :updated_at, :datetime, null: false 
  end
end
