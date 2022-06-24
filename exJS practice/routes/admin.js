const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();
const bodyPraser = require("body-parser");

let itemsData = [];

// app.use(bodyPraser.urlencoded({ extended: false }));

router.get("/products", (req, res) => {
  res.sendFile(path.join(path.resolve(), "/views/addProduct.html"));
});

router.post("/add-product", (req, res) => {
  itemsData.push({
    title: req.body.name,
    color: req.body.color,
    price: req.body.price,
  });
  res.send(itemsData);
  // res.redirect("/admin/products");
});

module.exports = router;
