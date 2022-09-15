import express from 'express'
import { initSequelize } from './sequelize'
import { getUser } from './user/get/request'

require('dotenv').config();

const app = express()
const port = process.env.API_PORT || 4001

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const sequelize = initSequelize();
(async () => {
  // await sequelize.sync({ force: true });
  await sequelize.sync();
})();

app.get('/', (req, res, next) => {
  res.json('Hello world')
})

const userRequest = getUser(sequelize);
app.get('/user/:uuid', userRequest);
app.get('/user', userRequest);
app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
});
