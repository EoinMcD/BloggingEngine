# frozen_string_literal: true

class ApplicationController < ActionController::Base
  def login!
    session[:user_id] = @user.id
  end

  def logged_in?
    !!session[:user_id]
  end

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def authorized_user?
    @user == current_user
  end

  def user_name?
    @user = current_user
    @user.first_name ||= User.find(session[:user_id]) if session[:user_id]
  end

  def set_user
    @user = User.find_by(id: session[:user_id])
  end
end
