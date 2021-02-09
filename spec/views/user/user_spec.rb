# frozen_string_literal: true

require 'rails_helper'



RSpec.describe 'User', type: :feature do
  it 'Shows text' do
    visit '/user'
    expect(page).to have_text('USER SIGNUP PAGE')
  end

  
end
