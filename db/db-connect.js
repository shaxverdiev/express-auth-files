const { Sequelize } = require("sequelize");

// это тоже можно перенести в переменные окружения
const sequelize = new Sequelize(
    'testuserdb',
    'root',
    'root',
  {
    host: "localhost",
    dialect: "mysql",
  }
);

sequelize.sync();

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = sequelize;