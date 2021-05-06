require 'rails_helper'

RSpec.describe LoginController, type: :controller do
    describe 'GET #login' do
        context 'When viewing login page in browser' do
            it 'returns a 200 OK response' do
                get :index
                expect(response.status).to eq(200)
            end
        end
    end
    describe 'POST login#create' do
        context 'When user submits correct params' do
            let(:login) { {email: 'foo@bar.com', password: '123456'}}
            it 'Logs user in' do
                post :create, params: login
                expect(controller.logged_in?).to eq(true)
            end
        end
        context 'When user submits incorrect params' do
            let(:login) { {email: 'foo@bar.com', password: 'wrongPassword'}}
            it 'Logs user in' do
                post :create, params: login
                expect(controller.logged_in?).to eq(false)
            end
        end
    end
    
end