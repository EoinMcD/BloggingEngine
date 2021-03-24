class SessionsController < ApplicationController
  include LoggingModule
  def create
    @user = User.find_by(email: session_params[:email])

    if @user&.authenticate(session_params[:password])
      login
      redirect_to '/articles'
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

  private

  def session_params
    params.require(:user).permit(:email, :password)
  end
end
