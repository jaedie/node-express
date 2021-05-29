const express = require("express");
const logger = require("./logger");
const authorize = require("./authorize");
const app = express();

// app.use("/api", logger);
app.use([logger, authorize]);

//req => middleware => res

app.get("/", (req, res) => {
  res.send("hello, this is home page <br> <a href='/about'>About</a>");
});

app.get("/about", (req, res) => {
  res.send("hello, this is about page <br> <a href='/'>Home</a>");
});

app.get("/api/products", (req, res) => {
  res.send("hello, this is products page <br> <a href='/'>Home</a>");
});

app.get("/api/items", (req, res) => {
  res.send("hello, this is items page <br> <a href='/'>Home</a>");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});
