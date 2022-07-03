// require('dotenv').config();

const express = require('express');
const sequelize = require('./db/db-connect')
const cookierParser = require('cookie-parser');
const router = require('./router/router');
const cors = require('./middlewares/cors_mw')
const UserModel = require('./models/user_model');

const PORT = process.env.PORT || 9999;
const app = express();




// функция для проверки запросов в БД
// async function testQueryInDB() {
//   const r = 'err@mailru'
//   const fff = await UserModel.findAll({where: {login: r}})
// console.log(fff)
// }
// testQueryInDB()


//mw
app.use(express.json());
app.use(cookierParser());
app.use(cors);
app.use(router);




const run = async () => {
  app.listen(PORT, () => {
    console.log(`The server is running on the PORT: ${PORT} ...`);
  });
};

run();
