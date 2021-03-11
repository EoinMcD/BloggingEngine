# frozen_string_literal: true

class User < ApplicationRecord
  validates :first_name, presence: true, length: { maximum: 25 }
  validates :second_name, presence: true, length: { maximum: 25 }

  before_save { self.email = email.downcase }
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i.freeze

  validates :email, presence: true, length: { maximum: 255 },
                    format: { with: VALID_EMAIL_REGEX },
                    uniqueness: { case_sensitive: false }

  has_secure_password

  validates :password, length: { minimum: 6 }, presence: true
end
