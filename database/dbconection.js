const { Sequelize } = require("sequelize");
const { database } = require("../config");

const sequelize = new Sequelize(
  database.database,
  database.username,
  database.password,
  {
    host: database.host,
    dialect: "mysql",
    port: database.port,
  }
);

sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Tablas sincronizadas");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = sequelize;
