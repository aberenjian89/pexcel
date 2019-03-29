class User < ApplicationRecord
  validates :username,:password_digest, :session_token, :email, presence: true
  validates :password, length: {minimum: 8, allow_nil: true}

  attr_reader :password

  after_initialize :ensure_session_token



  def self.find_by_credentials(username,password)
    @user = User.find_by(username: username)
    return nil if @user.nil?
    return @user.is_password?(password) ? @user : nil
  end


  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end


  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(@password)
  end


  def generate_session_token
    SecureRandom::urlsafe_base64
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= generate_session_token
  end

end
