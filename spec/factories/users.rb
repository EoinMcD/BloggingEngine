require 'factory_bot'

FactoryBot.define do
  sequence(:email) { |_n| "user#{rand}@example.com" }
  sequence(:first_name) { |n| "user#{n}" }
  factory :user do
    email { FactoryBot.generate :email }
    first_name { FactoryBot.generate :first_name }
    second_name { 'Testing' }
    password { '123456' }
    password_confirmation { '123456' }
  end
end
