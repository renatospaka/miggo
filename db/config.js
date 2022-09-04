const fs = require('fs');
require('dotenv').config()

const db_name = process.env.OPS_DB_NAME
const username = process.env.OPS_DB_USERNAME
const password = process.env.OPS_DB_PWD
const host = process.env.OPS_DB_HOST
const port = process.env.OPS_DB_PORT

module.exports = {
  development: {
    username: username,
    password: password,
    database: db_name,
    host: host,
    port: port,
    dialect: 'postgres',
    logging: true,
    seederStorage: 'sequelize'
  },
  test: {
    username: username,
    password: password,
    database: db_name,
    host: host,
    port: port,
    dialect: 'postgres',
    seederStorage: 'sequelize'
  },
  production: {
    username: username,
    password: password,
    database: db_name,
    host: host,
    port: port,
    dialect: 'postgres'
  }
}