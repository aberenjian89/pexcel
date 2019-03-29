class User < ApplicationRecord
  has_attached_file :avatar, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "https://www.vccircle.com/wp-content/uploads/2017/03/default-profile.png"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/


  attr_reader :password


  has_many :in_follows,
           foreign_key: :followee_id,
           class_name: :Follow

  has_many :out_follows,
           foreign_key: :follower_id,
           class_name: :Follow

  has_many :followers,
           through: :in_follows,
           source: :follower

  has_many :followees,
           through: :out_follows,
           source: :followee


  has_many :images,
   primary_key: :id,
   foreign_key: :author_id,
   class_name: :Image

  has_many :img_comments,
     through: :images,
     source: :comments

  has_many :comments,
     primary_key: :id,
     foreign_key: :author_id,
     class_name: :Comment





end
