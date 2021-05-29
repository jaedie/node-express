const express = require("express");
const path = require("path");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/products">products</a>');
});

app.get("/api/products", (req, res) => {
  const essentialInfo = products.map((product) => {
    const { id, image, price } = product;
    return { id, image, price };
  });

  res.send(`<a href="/api/products/${essentialInfo[0].id}">product ${essentialInfo[0].id}</a><br>
  <a href="/api/products/${essentialInfo[1].id}">product ${essentialInfo[1].id}</a><br>
  <a href="/api/products/${essentialInfo[2].id}">product ${essentialInfo[2].id}</a><br>
  <a href="/api/products/${essentialInfo[3].id}">product ${essentialInfo[3].id}</a>`);
});

app.get("/api/products/:productID", (req, res) => {
  const { productID } = req.params;

  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );

  if (!singleProduct) {
    return res.status(404).send("Product does not exist.");
  }

  res.json(singleProduct);
});

app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  console.log(req.params);
  res.send("hello world");
});

app.get("/api/v1/query", (req, res) => {
  console.log(req.query);
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  if (sortedProducts.length < 1) {
    return res.status(200).json({ success: true, data: [] });
  }

  res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
