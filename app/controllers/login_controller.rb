class LoginController < ApplicationController
  skip_before_action :user_exists
  def index
    
  end
  skip_before_action :verify_authenticity_token
  def create
    @user = User.find_by(email: session_params[:email])

    if @user && @user.authenticate(session_params[:password])
      login 
      redirect_to '/articles'
    else
      render json: {
        status: 401,
        errors: 'No User Found'
      }
    end
  end

  def session_params
    params.permit(:email, :password)
  end
end
