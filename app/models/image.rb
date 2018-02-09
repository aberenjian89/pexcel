class Image < ApplicationRecord
  validates :img_title,:img_location,:author_id,:img_desc,:date_taken,:category, presence: true

  has_attached_file :img, default_url: "default.png",styles: { medium: "300x300>", thumb: "100x100>" }

  validates_attachment_content_type :img, content_type: /\Aimage\/.*\z/



  validate :undefined_check_img_title, on: [:create,:update]
  validate :undefined_check_img_location, on: [:create,:update]
  validate :undefined_check_img_desc, on: [:create,:update]
  validate :undefined_check_date_taken, on: [:create,:update]
  validate :undefined_check_category, on: [:create,:update]


  def undefined_check_img_title
     if  img_title == "undefined"
       errors.add(:img_title, "Image Title can't be blank")
     end
  end

  def undefined_check_img_location
    if  img_location == "undefined"
      errors.add(:img_location, "Image Location can't be blank")
    end
  end

  def undefined_check_img_desc
    if  img_desc == "undefined"
      errors.add(:img_desc, "Image Description can't be blank")
    end
  end

  def undefined_check_date_taken
    if  date_taken == "undefined"
      errors.add(:date_taken, "Image Date can't be blank")
    end
  end

  def undefined_check_category
    if  category == "undefined"
      errors.add(:category, "Category can't be blank")
    end
  end





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
