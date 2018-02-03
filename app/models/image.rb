class Image < ApplicationRecord
  validates :img_title,:img_location,:author_id,:img_desc,:date_taken,:category, presence: true

  belongs_to :user,
   primary_key: :id,
   foreign_key: :author_id,
   class_name: :User

  has_many :comments,
   primary_key: :id,
   foreign_key: :img_id,
   class_name: :Comment

  has_many :likes,
   primary_key: :id,
   foreign_key: :img_id,
   class_name: :Like

end
