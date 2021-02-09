# frozen_string_literal: true

require 'test_helper'

class UserControllerTest < ActionDispatch::IntegrationTest
  test 'should get User' do
    get user_User_url
    assert_response :success
  end
end
