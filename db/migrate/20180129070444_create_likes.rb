class CreateLikes < ActiveRecord::Migration[5.1]
  def change
    create_table :likes do |t|
      t.integer :img_id
      t.integer :user_id
      t.timestamps
    end
    add_index :likes, :img_id
    add_index :likes, :user_id
  end
end
