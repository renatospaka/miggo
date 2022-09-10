import * as express from 'express'
import { initSequelize } from './sequelize'
import { getUser } from './user/get/request'

require('dotenv').config();

const app = express()
const port = process.env.API_PORT || 4001

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res, next) => {
  res.json('Hello world')
})

const sequelize = initSequelize();
(async () => {
  await sequelize.sync({ force: true });
});


const userRequest = getUser(sequelize);
app.get('/user/:uuid', userRequest);
app.get('/user', userRequest);
app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
});
