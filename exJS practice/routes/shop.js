const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
  //   console.log(path.resolve());
  res.sendFile(path.join(path.resolve(), "/views/shop.html"));
  //   res.sendFile(path.join(__dirname, "/public/app.html"));
});

module.exports = router;
