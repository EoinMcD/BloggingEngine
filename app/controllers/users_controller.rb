class UsersController < ApplicationController
  def user
    @user = User.new
  end
  skip_before_action :verify_authenticity_token
  def create
    @user = User.new(user_params)

    if @user.save
      login
      redirect_to '/articles'
    else
      render json: { status: 500, errors: @user.errors.full_messages }

    end
  end

  def user_params
    params.permit(:first_name, :second_name, :email, :password,
                  :password_confirmation)
  end
end
