class AddColumnToImageTable < ActiveRecord::Migration[5.2]
  def change
    add_column :images, :original_width, :integer
    add_column :images, :original_height, :integer
  end
end
