

import { Sequelize } from "sequelize";

//const stagingUrl = "postgres://postgres:postgres@34.159.252.18:5432/family_db";
const stagingUrl =
  "postgres://pyaephyokyaw:Aaa123!@@127.0.0.1:5432/estiago_backend_db";
const sequelize = new Sequelize(stagingUrl);

sequelize
  .authenticate()
  .then((res) => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

export default sequelize;
