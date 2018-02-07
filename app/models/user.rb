class User < ApplicationRecord
  validates :username,:password_digest,:session_token,:email, presence: true
  validates :password, length: {minimum: 8, allow_nil: true }

  has_attached_file :avatar, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "https://www.vccircle.com/wp-content/uploads/2017/03/default-profile.png"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/


  attr_reader :password

  after_initialize :ensure_session_token

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


  def self.find_by_credentials(username,password)
    @user  = User.find_by(username: username)
    return nil if @user.nil?
    return @user.is_password?(password) ? @user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def generate_session_token
    SecureRandom::urlsafe_base64
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save
    self.session_token
  end


  def followed_user_ids
    @followed_user_ids ||= out_follows.pluck(:followee_id)
  end

  def follows?(user)
    followed_user_ids.include?(user.id)
  end

  private
  def ensure_session_token
    self.session_token ||= generate_session_token
  end

end
