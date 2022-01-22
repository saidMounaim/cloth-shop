# clothshopp

Online Clothing Store using the MERN stack

![screenshot](https://i.ibb.co/kDtJPNy/clothshop.png)

## Features:

- Product reviews and ratings
- Product pagination
- Product search feature
- User profile with orders
- Full featured shopping cart
- Admin product management
- Admin user management
- Admin Order details page
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)
- PayPal / credit card integration
- Database seeder (products & users)

## Technology Stack:

- Node js
- Express Js
- MongoDB
- JWT
- React
- React Bootstrap
- Redux
- React Paypal Button V2

## Usage

### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
```

## Install Dependencies

```
npm install
cd frontend
npm install
```

### Run

```
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

- Version: 1.0.0
- License: MIT
- Author: Said Mounaim
