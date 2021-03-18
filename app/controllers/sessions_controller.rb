# frozen_string_literal: true

class SessionsController < ApplicationController
  def create
    @user = User.find_by(email: sessions_params[:email])

    if @user&.authenticate(sessions_params[:password])
      login!
      render json: {
        logged_in?: true,
        user: @user
      }
    else
      render json: {
        status: 401,
        errors: ['No user found']
      }
    end
  end

  def is_logged_in?
    if logged_in? && current_user
      render json: {
        logged_in: true,
        user: current_user
      }
    else
      render json: {
        logged_in: false,
        message: 'no such user'
      }
    end
  end

  def destroy
    logout!
    render json: {
      status: 200,
      logged_out: true
    }
  end

  private

  def session_params
    params.require(:user).permit(:username, :password)
  end
end
