class ChangeImageTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :images, :img_title
    remove_column :images, :img_location
    remove_column :images, :author_id
    remove_column :images, :date_taken
    remove_column :images, :category
    remove_column :images, :img_file_name
    remove_column :images, :img_content_type
    remove_column :images, :img_file_size 
    remove_column :images, :img_updated_at
    remove_column :images, :width
    remove_column :images, :height
    add_column :images, :name, :string, null: false
    add_column :images, :owner_id, :integer, null: false
  end
end
