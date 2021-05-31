class UsersController < ApplicationController
  skip_before_action :user_exists
  def user
    @user = User.new
    @form_token = form_authenticity_token
  end
  wrap_parameters false
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
