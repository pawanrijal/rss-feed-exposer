const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const { sequelize } = require("./lib/databaseConnection");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const { router } = require("./routes");
app.use(router);

const HttpException = require("./exceptions/HttpException");

//sequelize authentication to database
sequelize
  .authenticate()
  .then(() => {
    // sequelize.sync({ force: true });
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log(err.message);
  });

//test
app.get("/test", (req, res) => {
  return res.json({ message: "Test Successful" });
});

//if Routes Not Found
app.use((req, res, next) => {
  const err = new HttpException(404, "Route doesnot exist");

  next(err);
});

// Global error handler
app.use((err, req, res, next) => {
  err.success = false;
  err.status = err.status || 500;
  err.message = err.message || "Something went wrong";
  err.data = err.data || err.stack;

  res.status(err.status).json({
    success: err.success,
    status: err.status,
    message: err.message,
    data: err.data,
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
