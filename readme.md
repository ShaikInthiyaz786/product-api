# Product API

A Node.js and Express API that receives a list of products and returns the total value of all products. This project is a simple backend application designed to handle product data, calculate total product values, and return the result.

## Features

- API Endpoint: Accepts a list of products and calculates the total value based on price and quantity.
- Validation: Ensures that price and quantity are numbers.
- Modular Structure: Organized code with clear separation of controllers, services, and routes.

## Table of Contents

- Installation
- Usage
- Project Structure
- API Endpoints
- Environment Variables

## Installation

Clone the repository:

`````git clone https://github.com/your-username/product-api.git
cd product-api```

## Install dependencies:
````npm install```

### Set up environment variables: Create a .env file in the root directory and add the following:

```PORT=3000
DB_HOST=your_database_host
DB_USER=your_database_user
DB_PASS=your_database_password
DB_NAME=your_database_name```

### Start the server:
```npm start```
The server should now be running on http://localhost:3000.

## Usage
Use a tool like Postman or curl to interact with the API.

### Example Request
Send a POST request to /api/products/total-value with a JSON body containing an array of product objects. Each object should have name, price, and quantity fields.

Endpoint: POST /api/products/total-value

Request Body:

json
```{
  "products": [
    { "name": "Product A", "price": 10, "quantity": 2 },
    { "name": "Product B", "price": 20, "quantity": 3 },
    { "name": "Product C", "price": 15, "quantity": 1 }
  ]
}```

Response:

```{
  "totalValue": 85
}```

## Project Structure
product-api/
├── src/
│   ├── controllers/
│   │   └── productController.js
│   ├── routes/
│   │   └── productRoutes.js
│   ├── services/
│   │   └── productService.js
│   ├── models/
│   │   └── product.js
│   ├── app.js
│   └── server.js
├── config/
│   └── db.js
├── .env
├── package.json
└── README.md
src/: Contains the main application code.
controllers/: Handles incoming requests.
routes/: Defines API endpoints.
services/: Contains business logic and calculations.
config/: Configuration files, such as the database connection.
.env: Environment variables configuration.
API Endpoints
POST /api/products/total-value: Calculates the total value of products.
Environment Variables
This project uses environment variables for configuration. Add the following to a .env file:

```PORT=3000
DB_HOST=your_database_host
DB_USER=your_database_user
DB_PASS=your_database_password
DB_NAME=your_database_name```
`````
