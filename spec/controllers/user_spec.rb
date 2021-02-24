# frozen_string_literal: true

require 'rails_helper'

RSpec.describe UsersController, type: :controller do
  describe 'GET #user' do
    context 'when viewing create user page in the browser' do
      it 'returns a 200 OK response' do
        get :user
        expect(response.status).to eq(200)
      end
    end
  end
  describe 'POST #create' do
    context 'When user submits correct params' do
      let(:user) {{first_name: "Test", second_name: "User", email: "test@user.com", password: "123456", password_confirmation: "123456"}}
      it 'Creates user in database' do
        count = User.count
        post :create, params: user
        expect(User.count).to eq(count+1)
      end
      it 'Redirects to home page' do
        post :create, params: user
        
        expect(response.status).to eq(302)
      end
    end
  end
end


