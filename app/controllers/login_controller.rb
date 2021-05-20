class LoginController < ApplicationController
  skip_before_action :user_exists
  def index
    @form_token = form_authenticity_token
  end
  wrap_parameters false
  def create
    @user = User.find_by(email: session_params[:email])
    if @user&.authenticate(session_params[:password])
      login
      redirect_to articles_path
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
