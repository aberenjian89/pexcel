# PEXCEL

Pexcel is a web application similar 500px which allow user to upload
their own photos  and share it with other users. it will also allow user explore other 
user's photos. User also able to add/edit image information.

![](https://github.com/aberenjian89/pexcel/blob/master/docs/home_page.png?raw=true)

# Technology Used

* PostgresSql
* Ruby on Rails
* React/Redux
* Paperclip
* AWS (Amazon Web Service)
* Font Aswome

# Features 

* secure autheticaton on backend, using Bcrypt 
* user can upload image directly via image web server 
* user can add information such as title and categorize the image
* user can edit and delete their images 
* images will display fast in organize CSS grid. 

**Home Feed**

Users can view other peoples image and image will display accoring to window size. CSS is structring the grid base on the number of images and their sizes. All Css styles are avaliable in stylesheet folder.

![](https://github.com/aberenjian89/pexcel/blob/master/docs/ImageGallery.png?raw=true)

**Upload**

Users can upload the image and add information to their image before uploading it. uploading process are done via Amazon Web Service and Paperclip.

![](https://github.com/aberenjian89/pexcel/blob/master/docs/Upload.png?raw=true)

# Possible Future Feature

* Comment 
* Like
* Google Map
* OAuth 
* Tags
* Search
* Upload images vis Facebook,Instagram
