const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;

//test
app.get("/test", (req, res) => {
  return res.json({ message: "Test Successful" });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
