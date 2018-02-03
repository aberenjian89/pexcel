# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Image.destroy_all


User.create(username:"Demo", password:12345678, email: "Demo@email.com" )
User.create(username:"Ali2000",password: 12345678, email: "Ali@gmail.com")


# Image.create(img_title: "andrik-langfield-petrides",
#              img_location: cl_image_tag('Cars/andrik-langfield-petrides-305882.jpg'),
#              author_id: 4,
#              img_desc: "This is my card",
#              date_take: "2012/12/13",
#              category: "Cars"
#              )




