const express = require("express");
const app = express();

//this get function will run every time a user sends request from '/' a.k.a home page
app.get("/", (req, res) => {
  res.status(200).send("Home");
});

app.get("/about", (req, res) => {
  res.status(200).send("About");
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>resource not found</h1>");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000...");
});
