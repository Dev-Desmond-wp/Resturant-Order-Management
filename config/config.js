require('dotenv').config();

const username = process.env.DBUSERNAME;
const password = process.env.DBPASSWORD;
const name = process.env.DBNAME;
const host = process.env.DBHOST;
const port = process.env.DBPORT;

module.exports = 
{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": username,
    "password": password,
    "database": name,
    "host": host,
    "dialect": "mysql",
    "port": port
  }
}
