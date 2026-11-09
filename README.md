Restaurant Order Management System

A RESTful API for managing restaurant operations, including customers, food items, categories, orders, and order items. The application is built with Node.js, Express.js, Sequelize ORM, and MySQL.

Features
Customer Management: Create, retrieve, update, and manage customer records.
Food Item Management: Manage restaurant food items.
Category Management: Organize food items into categories.
Order Management: Handle customer orders.
Order Item Management: Manage individual items associated with orders.
Database Integration: MySQL database integration using Sequelize ORM.
Input Validation: Joi validation for incoming data.
Environment Configuration: Uses dotenv to manage environment variables.
Technologies Used
Node.js
Express.js
MySQL
Sequelize ORM
Sequelize CLI
Joi
dotenv
Project Structure
text
Resturant-Order-Management/
│
├── config/
├── controller/
├── database/
├── middleware/
├── migrations/
├── models/
├── routes/
│
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md

Installation and Setup
1. Clone the repository
bash
git clone https://github.com/Dev-Desmond-wp/Resturant-Order-Management.git

2. Navigate into the project directory
bash
cd Resturant-Order-Management

3. Install dependencies
bash
npm install

4. Configure environment variables

Create a .env file in the root directory:

env
PORT=6000

DB_HOST=localhost
DB_USER=avnadmin
DB_PASSWORD=your_password
DB_NAME=restaurant_db
DB_PORT=16223


Update the database variables to match your local MySQL configuration.

5. Create the database

Create a MySQL database named:

sql
CREATE DATABASE restaurant_db;

6. Run database migrations

If your project migrations are configured with Sequelize CLI, run:

bash
npx sequelize-cli db:migrate

7. Start the application

Development mode:

bash
npm run dev


Production mode:

bash
npm start


The application runs on the port specified in your .env file.

API Modules

The application includes the following API modules:

Module	Description
Customers	Customer information management
Food Items	Restaurant menu management
Categories	Food category management
Orders	Customer order management
Order Items	Individual order item management
Environment Variables
Variable	Description
PORT	Application server port
DB_HOST	MySQL database host
DB_USER	MySQL username
DB_PASSWORD	MySQL password
DB_NAME	Database name
DB_PORT	MySQL port
Running the Application


Authors and Collabs

Onuoha Desmond(Arthor)
Oriaku Wisdom
Adele Omotayo
Ohamadike Chidubem




GitHub: https://github.com/Dev-Desmond-wp

