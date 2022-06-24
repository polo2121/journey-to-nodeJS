const express = require("express");
const path = require("path");
const app = express();

const userRouter = require("./routes/shop");
const adminRouter = require("./routes/admin");

const bodyPraser = require("body-parser");

app.use(bodyPraser.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));
console.log(path.join(__dirname, "public/css"));

// app.use(express.static("./public"));

app.use(userRouter);
app.use("/admin", adminRouter);

//form ကလာတယ် info body ကိုပဲဖတ်နိုင်

app.all("*", (req, res) => {
  res.status(404).send("<h1>Resource Not Found</h1>");
});

app.listen(3000, () => {
  console.log("sss");
});
