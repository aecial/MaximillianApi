const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const productRoutes = require("./api/routes/products");
const orderRoutes = require("./api/routes/orders");
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:" +
    process.env.MONGO_ATLAS_PW +
    "@node-rest-shop.btbezul.mongodb.net/?retryWrites=true&w=majority",
  {}
);

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method == "OPTIONS") {
    req.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});
//extract json data
app.use(bodyParser.json());
// for products and order
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});
module.exports = app;
