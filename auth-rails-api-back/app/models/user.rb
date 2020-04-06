class User < ApplicationRecord
  has_secure_password
  has_many :secrets
  validates :email, :name, presence: true
  validates :email, uniqueness: true
  #why is a password validation ok to not be here, has_secure_password checks for password prescence
end
