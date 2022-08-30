import { Sequelize } from 'sequelize'

const db_name = process.env.OPS_DB_NAME
const username = process.env.OPS_DB_USERNAME
const password = process.env.OPS_DB_PWD
const host = process.env.OPS_DB_HOST
const port = process.env.OPS_DB_PORT

export function initSequelize() {
  if(!db_name) {
    console.log('No db_name defined')
    process.exit(1)
  }

  if(!username) {
    console.log('No username defined')
    process.exit(1)
  }

  if(!password) {
    console.log('No DB password defined')
    process.exit(1)
  }

  if(!host) {
    console.log('No host defined')
    process.exit(1)
  }

  if(!port) {
    console.log('No port defined')
    process.exit(1)
  }

  const sequelize = new Sequelize({
      database: db_name,
      username: username,
      password: password,
      dialect: 'postgres',
      host: host,
      port: parseInt(port),
      pool: {
          max: 5,
          min: 0,
          idle: 1000
      },
      define: {
          paranoid: true
      }
  })

  return sequelize
}