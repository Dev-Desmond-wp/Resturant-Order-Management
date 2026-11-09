const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT
const sequelize = require('./database/database');
const customerRouter = require("./routes/customerRouter")
const orderRouter = require('./routes/orderrouter')
const fooditemRouter = require('./routes/Router_foodItems')
const categoryRouter = require('./routes/categoryRoute')
const orderitemRouter = require('./routes/orderitemrouter')

const app = express()
app.use(express.json());
app.use(customerRouter)
app.use(orderRouter)
app.use(fooditemRouter)
app.use(categoryRouter)
app.use(orderitemRouter)

const DBconnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
DBconnection();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})