const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("login");
});

router.post("/", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcom ${name}`);
  }
  res.status(401).send("Please provide credentials");
});

module.exports = router;
