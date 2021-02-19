# frozen_string_literal: true

class UsersController < ApplicationController
  def user
    @user = User.new
  end
  

  def show 
    @user = User.find(params[:id])
  end

  def create 
    @user = User.new(user_params)

    if @user.save

      flash[:success] = "Welcome to the Sample App!"
      
      redirect_to @user
    else
      render 'user'
      
    end
  end

  def user_params

    params.require(:user).permit(:first_name,:second_name,:email, :password,
                                      :password_confirmation)

  end

  
end