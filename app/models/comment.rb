class Comment < ApplicationRecord
  validates :body,:author_id,:img_id, presence: true
  belongs_to :user,
   primary_key: :id,
   foreign_key: :author_id,
   class_name: :User

  # belongs_to :top_comment,
  #            foreign_key: :
  #
  # has_many :sub_comments,
  #
  #
end
