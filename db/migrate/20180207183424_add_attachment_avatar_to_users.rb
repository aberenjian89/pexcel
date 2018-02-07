class AddAttachmentAvatarToUsers < ActiveRecord::Migration[5.1]
  def self.up
    # change_table :users do |t|
    #   t.attachment :avatar
    # end
    add_attachment :users, :avatar
  end

  def self.down
    remove_attachment :users, :avatar
  end
end
