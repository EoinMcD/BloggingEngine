class MainController < ApplicationController
  def index
    @name = current_user.first_name
    @logged_in = logged_in?
  end
end
