# frozen_string_literal: true

class MainController < ApplicationController
  def index
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
end
