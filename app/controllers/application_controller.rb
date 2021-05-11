class ApplicationController < ActionController::Base
  before_action :user_exists
  def login
    session[:user_id] = @user.id
  end

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def logged_in?
    !!current_user
  end

  private

  def user_exists
    redirect_to('log_path') unless current_user
  end
end
