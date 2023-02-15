const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const router = require("./routes/router");
const sequelize = require("./util/database");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(router);

sequelize
  .sync()
  .then((result) => {
    console.log("Database synced");
    app.listen(process.env.PORT);
  })
  .catch((err) => console.log(err));
