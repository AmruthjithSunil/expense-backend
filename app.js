const express = require("express");
require("dotenv").config();

const router = require("./routes/router");
const sequelize = require("./util/database");

const app = express();
app.use(router);

sequelize
  .sync()
  .then((result) => {
    console.log("Database synced");
    app.listen(process.env.PORT);
  })
  .catch((err) => console.log(err));
