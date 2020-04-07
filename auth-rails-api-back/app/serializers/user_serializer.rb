class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email
  # addition of these will show less info like the password hash in the console view
end
