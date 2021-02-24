# frozen_string_literal: true

class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :email
      t.string :first_name
      t.string :second_name
      t.string :password

      t.timestamps
    end
  end
end
