class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user

  def current_user
    return nil if session[:session_token].nil?
    @current_user = User.find_by(session_token: session[:session_token])
  end

  def login(user)
    session[:session_token]=user.session_token
    current_user
  end

  def logout
    current_user.reset_session_token!
    session[:session_token]=nil
  end

end
