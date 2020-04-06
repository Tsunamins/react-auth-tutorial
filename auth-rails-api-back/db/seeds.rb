# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

chloe = User.create(name: "Chloe", email: "chloe@chloe.com", password: "password")
graycie = User.create(name: "Graycie", email: "graycie@graycie.com", password: "password")
april = User.create(name: "April", email: "april@april.com", password: "password")

chloe.secrets.create(content: "I think I'm a dog!")
graycie.secrets.create(content: "I am mischievious on purpose")
april.secrets.create(content: "I like chewing on my fur")
graycie.secrets.create(content: "I dream about my scratching post")
april.secrets.create(content: "I want to learn to play video games")
