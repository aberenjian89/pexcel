# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Image.destroy_all
Comment.destroy_all

#
user1=User.new(username:"Demo", password:12345678, email: "Demo@email.com" )
user2=User.new(username:"Ali2000",password: 12345678, email: "Ali@gmail.com")
user1.save!
user2.save!


img1=Image.new(img_title: "andrik langfield petrides",
         img_location: "img",
         author_id: user1.id,
         img_desc: "This is my car",
         date_taken: "2016/07/04",
         category: "Cars")
img1.save!
img2=Image.new(img_title: "benjamin-child",
          img_location: "img",
          author_id: user1.id,
          img_desc: "This is my car",
          date_taken: "2015/10/13",
          category: "Cars")
img2.save!
img3=Image.new(img_title: "cam-bowers",
          img_location:"img",
          author_id: user1.id,
          img_desc: "This is my car",
          date_taken: "2015/09/13",
          category: "Cars")

img3.save!
img4=Image.new(img_title: "clem-onojeghuo",
          img_location: "img",
          author_id: user1.id,
          img_desc: "it's just a picture",
          date_taken: "2014/07/13",
          category: "Cars")
img4.save!
img5=Image.new(img_title: "daniel-klein",
          img_location: "img",
          author_id: user1.id,
          img_desc: "This is my car",
          date_taken: "2009/03/13",
          category: "Cars")
img5.save!
img6=Image.new(img_title: "giovanni-ribeiro",
          img_location: "img",
          author_id: user2.id,
          img_desc: "This is my car",
          date_taken: "2010/05/13",
          category: "Cars")
img6.save!
img7=Image.new(img_title: "jordan-andrews",
          img_location:"img",
          author_id: user2.id,
          img_desc: "This is my car",
          date_taken: "2008/11/13",
          category: "Cars")
img7.save!
img8=Image.new(img_title: "kace-rodriguez",
          img_location: "img",
          author_id: user2.id,
          img_desc: "This is car",
          date_taken: "2013/11/13",
          category: "Cars")
img8.save!
img9=Image.new(img_title: "philippe-desforges",
          img_location: "img",
          author_id: user2.id,
          img_desc: "I don't have any description",
          date_taken: "2016/09/13",
          category: "Cars")
img9.save!
img10=Image.new(img_title: "pierre-michel-villa",
          img_location: "img",
          author_id: user2.id,
          img_desc: "This is my car",
          date_taken: "2002/10/13",
          category: "Cars")
img10.save!


Comment.create(body:"This is nice car",
               author_id: user1,
               img_id: img5.id)

Comment.create(body:"Nice, I really like it",
               author_id:user2,
               img_id: img5.id)

Comment.create(body:"Nice, Thank you",
               author_id:user1,
               img_id: img5.id)

Comment.create(body: "I really like the color!",
               author_id:user2,
               img_id: img8.id)
Comment.create(body: "I don't know , maybe",
               author_id:user1,
               img_id: img7.id)
Comment.create(body: "It's good looking picture",
               author_id:user2,
               img_id: img4.id)
Comment.create(body: "What do you think about this one?",
               author_id:user1,
               img_id: img3.id)
Comment.create(body: "This is amazing",
               author_id:user2,
               img_id: img4.id)

Comment.create(body: "I love it",
               author_id:user1,
               img_id: img5.id)

Comment.create(body: "This is the car i want",
               author_id:user2,
               img_id: img4.id)







