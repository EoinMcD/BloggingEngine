# frozen_string_literal: true

class HomeController < ApplicationController
  skip_before_action :user_exists
  def index
  end
end
