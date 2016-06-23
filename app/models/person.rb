class Person < ActiveRecord::Base
  validates :name, presence: true
  validates :bio, presence: true
end
