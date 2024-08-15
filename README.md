# Food Delivery App using MERN Stack

This is a full-stack food ordering web application built using the MERN stack (MongoDB, Express, React, Node.js). The application consists of a customer-facing app for ordering food and an admin app for managing orders, menu items, and more.

Deployed link : https://food-delivery-app-1-ervk.onrender.com/
Admin Panels : https://food-delivery-app-admin-7t4k.onrender.com/

## Food Delivery App using MERN Stack

- [Key Features](#key-features)
- [Technologies used](#technologies-used)
  - [Frontend](#frontend)
  - [Backend](#backend)
  - [Database](#database)
- [Configuration and Setup](#configuration-and-setup)
- [📸 Screenshots](#screenshots)
- [Author](#author)

## Key Features

- User authentication and authorization
- Browse food items
- Add items to the cart and place orders
- Stripe Payment Integration: Secure and reliable payment processing using Stripe.
- Order tracking
- Admin panel to manage menu items, orders

## Technologies used

This project was created using the following technologies.

#### Frontend

- [React js ](https://www.npmjs.com/package/react) - JavaScript library that is used for building user interfaces specifically for single-page applications
- [React Hooks ](https://reactjs.org/docs/hooks-intro.html) - For managing and centralizing application state
- [react-router-dom](https://www.npmjs.com/package/react-router-dom) - To handle routing
- [axios](https://www.npmjs.com/package/axios) - For making Api calls
- [Css](https://developer.mozilla.org/en-US/docs/Web/CSS) - For User Interface

#### Backend

- [Node js](https://nodejs.org/en/) -A runtime environment to help build fast server applications using JS
- [Express js](https://www.npmjs.com/package/express) -The server for handling and routing HTTP requests
- [cors](https://www.npmjs.com/package/cors) - We cangive permission to frontend to connect with the database.
- [Dotenv](https://www.npmjs.com/package/dotenv) - Using this we can use the environment variables in our projects.
- [Mongoose](https://mongoosejs.com/) - Help us to connect with the database
- [Nodemon](https://www.npmjs.com/package/nodemon) - Using this package when we will save our project, the server will be restarted.
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - Using this we will create the authentication system.
- [Bcryptjs](https://www.npmjs.com/package/bcryptjs) - Using this we will encrypt the users data and store in the data base.
- [Body Parser](https://www.npmjs.com/package/body-parser) - Using this we will parsethe data coming through the user.
- [Multer](https://www.npmjs.com/package/multer) - Using this multer we can create the image store system.
- [Stripe](https://www.npmjs.com/package/stripe?activeTab=readme) -Using this we will add the payment gateway on the web page.
- [Validater](https://www.npmjs.com/package/validator) - We will check the password and email idis valid or not.

#### Database

- [MongoDB ](https://www.mongodb.com/) - It provides a free cloud service to store MongoDB collections.

## Configuration and Setup

### Setup .env file

```shell
PORT = 4000
mongourls  = ADD_YOUR_MONGO_URI_HERE
JWT_SECRET = ADD_YOUR_JWT_SECRET_HERE
STRIPE_SECRET_KEY = ADD_YOUT_STRIPE_KEY
apisecret = ADD_YOUR_RAZORPAY_KEY_SECRET

```

### Installation

```shell
Install dependencies for frontend
npm install

Install dependencies for backend
npm install


Run the frontend
npm run dev

Run the backend
npm run server

Run the admin
npm run dev

Backend runs on http://localhost:4000 and frontend on http://localhost:5173/ and admin on http://localhost:5174/
```

## Screenshots

#### Banner

![1  banner](https://github.com/user-attachments/assets/0342493d-1c62-48ef-b1f2-28c64924f09f)

---

#### Sign Up

if new users, create accounts

![2  sign up](https://github.com/user-attachments/assets/b3fd7e47-cc5c-481b-9a77-4443134a0689)

---

#### Login

If you already have an account , login here and enter your email id and password and login on this web page

![3  login](https://github.com/user-attachments/assets/72f33078-fca2-48ef-adf1-27da0ee13109)

---

#### Menus

Here you can see the list of food items that we can order from this website.

![4  menus](https://github.com/user-attachments/assets/3e7e2f00-bcbb-4c08-85fb-a7923cc690d2)

---

#### Filter Menus

Here we have this menu if I click on this desert it will display only desert.
if I click on noddles , it will display only noodles,
if we click on menu again , it will display all the food items.

![4  a](https://github.com/user-attachments/assets/3d62ed6b-4a02-448c-9405-4ab5419d21f3)

---

#### Add Items to the Cart

Now we can add the product in our cart. Here we have the + icon , click on it, this product will be added to the cart.
if we click on plus , it will increase the quantity.
and if we click on minus icon , it will decrease the quantity.

![5  add items](https://github.com/user-attachments/assets/a684cd85-43e5-4e30-86a7-948edfc90859)

---

#### Proceed to checkout

Now we will open the cart page, so in this cart page we can see the Product image , product name, price, quantity and here we have the total price and delivery charges
now we will click on this proceed to checkout.

![5  proceed to checkout](https://github.com/user-attachments/assets/3c77c624-c621-4ea8-9359-a9128e0d5370)

---

#### Delivery Information

It will take you to the delivery information pages , where user can enter there name , address and proceed to payment page.

![6  delivery information](https://github.com/user-attachments/assets/3838f4e1-ddfb-41be-9dbd-7bc361dab08e)

---

#### Payment

It will open the payment page that we have created using the stripe , on this page also we can see the user information.
fill information and click on the pay button and complete.

![7  payment](https://github.com/user-attachments/assets/9890a0eb-8142-4676-b36d-1728348ce885)

---

#### Order Pages

After successful payment, it will open the my order page. where we can see the order details
here is displaying the food details, quantity , total price , and the order status is processing.

![8  order pages](https://github.com/user-attachments/assets/6ea9d04c-8bdd-4c6a-91b2-619cc7e31140)

---

#### Admin Panel

Lets see the preview of our admin panel, here we have the three options

add items, 
list items,
orders

---

#### Admin - List Items

Here we have the all the food item listed on our web page
we can delete the food list.

![9  admin list items ](https://github.com/user-attachments/assets/52ba6877-46cd-4dd9-a667-d0d41df82b37)

---

#### Admin - Add Items

we can add the new item , by clicking on add item.

![10  add items](https://github.com/user-attachments/assets/c563a77d-8c94-4d7b-900e-6fbad9beca36)

---

#### Admin - Order Pages

We can see the new order we have just placed on our website .
order information, delivery address and option to change the status of the order .
status – food processing, out of delivery, delivered.
we can change status of the order from the admin panel.
and user will see status delivered

![11  admin orders](https://github.com/user-attachments/assets/9803f97f-7f13-4311-9a0f-eb30ac86f750)

---

## Author

- Portfolio: [monika163](----)
- Github: [monika163](https://github.com/monika163)
- Linkedin: [monika163](https://www.linkedin.com/in/monika-dewangan-78a427149/)
