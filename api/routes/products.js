const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling get req to products",
  });
});
router.post("/", (req, res, next) => {
  const product = {
    name: req.body.name,
    price: req.body.price,
  };
  res.status(201).json({
    message: "Handling post req to products",
    createdProduct: product,
  });
});

router.get("/:productId", (req, res, next) => {
  const id = req.params.productId;
  if (id === "Ted") {
    res.status(200).json({
      message: "Omkei",
    });
  } else {
    res.status(200).json({
      message: "Not Omkei",
    });
  }
});

router.patch("/:productId", (req, res, next) => {
  res.status(200).json({
    message: "Update Goods",
  });
});

router.delete("/:productId", (req, res, next) => {
  res.status(200).json({
    message: "Delete Goods",
  });
});
module.exports = router;
