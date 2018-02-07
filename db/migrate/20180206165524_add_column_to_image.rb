class AddColumnToImage < ActiveRecord::Migration[5.1]
  def change
    add_column :images, :width, :integer
    add_column :images, :height, :integer
  end
end
