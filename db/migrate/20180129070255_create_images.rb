class CreateImages < ActiveRecord::Migration[5.1]
  def change
    create_table :images do |t|
      t.string :img_title, null: false
      t.string :img_location, null: false
      t.integer :author_id, null:false
      t.string :img_desc, null:false
      t.string :date_taken, null:false
      t.string :category, null:false
      t.timestamps
    end
    add_index :images, :img_title
    add_index :images,:date_taken
  end
end
