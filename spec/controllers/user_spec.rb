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
      let(:user) { { first_name: 'Test', second_name: 'User', email: 'test@user.com', password: '123456', password_confirmation: '123456' } }
      it 'Creates user in database' do
        count = User.count
        post :create, params: user
        expect(User.count).to eq(count + 1)
      end
      it 'Redirects to new page' do
        post :create, params: user
        expect(response).to redirect_to('/articles')
      end
      it 'Logs the user in after sign up' do
        post :create, params: user
        expect(!!controller.current_user).to eq(true)
      end
    end
    context 'When user submits incorrect params' do
      let(:user) { { first_name: '', second_name: 'User', email: 'test@user.com', password: '12345', password_confirmation: '12345' } }
      it 'Doesnt add a user' do
        count = User.count
        post :create, params: user
        expect(User.count).to eq(count)
      end
      it 'Doesnt log the user in' do
        post :create, params: user
        expect(controller.current_user).to eq(nil)
      end
      it 'Doesnt redirect to new page' do
        post :create, params: user
        expect(response.status).not_to eq(302)
      end
    end
  end
end
