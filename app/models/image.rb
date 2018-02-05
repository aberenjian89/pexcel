class Image < ApplicationRecord
  validates :img_title,:img_location,:author_id,:img_desc,:date_taken,:category, presence: true

  has_attached_file :img, default_url: "default.png"
                    # :storage => :s3,
                    # :s3_host_name => ENV["s3_region"],
                    # :bucket => ENV["s3_bucket"],
                    # :s3_credentials => {
                    #     :bucket => ENV["s3_bucket"],
                    #     :access_key_id => ENV["s3_access_key_id"],
                    #     :secret_access_key => ENV["s3_secret_access_key"],
                    #     :s3_region => ENV["s3_region"]
                    # }
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
