class MainController < ApplicationController
  def index
    @name = current_user.first_name
  end
end
