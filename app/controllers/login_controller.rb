class LoginController < ApplicationController
  skip_before_action :user_exists
  def index
    
  end
  def create
    @user = User.findBy(user_params)
    if(@user.presence)
      login
    else
    end
  end

  def user_params
    params.permit(:email, :password)
  end
end
