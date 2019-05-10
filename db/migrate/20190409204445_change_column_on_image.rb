class ChangeColumnOnImage < ActiveRecord::Migration[5.2]
  def change
    remove_column :images, :img_desc
    add_column :images, :description, :string
  end
end
