// require('dotenv').config();

const express = require('express');
const fileupload = require('express-fileupload')
const cookierParser = require('cookie-parser');
// const sequelize = require('./db/db-connect')
const router = require('./router/router');
const cors = require('./middlewares/cors_mw')
// const UserModel = require('./models/user_model');

const PORT = process.env.PORT || 9999;
const app = express();


 

//mwd
app.use(express.json());
app.use(cookierParser());
app.use(fileupload({}))
app.use(cors);
app.use(router);



const run = async () => {
  app.listen(PORT, () => {
    console.log(`The server is running on the PORT: ${PORT} ...`);
  });
};

run();
