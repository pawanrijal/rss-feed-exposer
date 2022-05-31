const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const { sequelize } = require("./lib/databaseConnection");
const bodyParser = require("body-parser");

//sequelize authentication to database
sequelize
  .authenticate()
  .then(() => {
    sequelize.sync({ alter: true });
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log(err.message);
  });

//test
app.get("/test", (req, res) => {
  return res.json({ message: "Test Successful" });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
