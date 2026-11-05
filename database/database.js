const { Sequelize } = require('sequelize');

const username = process.env.DBUSERNAME;
const password = process.env.DBPASSWORD;
const name = process.env.DBNAME;
const host = process.env.DBHOST;
const port = process.env.DBPORT;

const sequelize = new Sequelize(name, username, password, {
    host: host,
    dialect: 'mysql',
    port: port
});

module.exports = sequelize;