class Image < ApplicationRecord
  validates :name, presence: true
  has_one_attached :image_file

  belongs_to :user,
   primary_key: :id,
   foreign_key: :owner_id,
   class_name: :User



end
