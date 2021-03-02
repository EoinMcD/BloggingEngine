# frozen_string_literal: true

class UsersController < ApplicationController
  def user
    @user = User.new
  end

  def show
    @user = User.find(params[:id])
  end
  skip_before_action :verify_authenticity_token
  def create
    
    @user = User.new(user_params)

    if @user.save

      flash[:success] = 'Welcome to the Sample App!'

      redirect_to "/index"
    else
      render 'user'
      

    end
  end

  def user_params
    params.permit(:first_name, :second_name, :email, :password,
                                 :password_confirmation)
  end
end
