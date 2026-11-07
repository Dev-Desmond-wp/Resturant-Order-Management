const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT
const sequelize = require('./database/database');


const app = express();
app.use(express.json());



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