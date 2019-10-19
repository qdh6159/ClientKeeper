# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


10.times do
    Client.create(
      first_name: Faker::Name.first_name,
      last_name: Faker::Name.last_name,
      street: Faker::Address.street_address,
      city: Faker::Address.city,
      state: Faker::Address.state, 
      zip: Faker::Address.zip_code,
      social: Faker::Number.number(digits: 4),
      rating: Faker::Number.between(from: 1, to: 4),
      last_contact: Faker::Date.between(from: 2.years.ago, to: Date.today),
      notes: Faker::Lorem.paragraph(sentence_count: 4)
    )
  end