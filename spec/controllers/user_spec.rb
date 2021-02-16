# frozen_string_literal: true

require 'rails_helper'

RSpec.describe UserController, type: :controller do
  describe 'GET #user' do
    context 'when viewing create user page in the browser' do
      it 'returns a 200 OK response' do
        get :User
        expect(response.status).to eq(200)
      end
    end
  end
end

RSpec.describe 'user', type: :feature do
  it 'Shows text' do
    visit '/user'
    expect(page).to have_text('USER SIGNUP PAGE')
  end
end
