class Image < ApplicationRecord
  validates :img_title,:img_location,:author_id,:img_desc,:date_taken,:category, presence: true

  has_attached_file :img, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "default.png"
  validates_attachment_content_type :img, content_type: /\Aimage\/.*\z/


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
