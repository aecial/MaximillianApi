const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling get req to orders",
  });
});
router.post("/", (req, res, next) => {
  const order = {
    productId: req.body.productId,
    quantity: req.body.quantity,
  };
  res.status(201).json({
    message: "Handling post req to orders",
    createdOrder: order,
  });
});

router.get("/:orderId", (req, res, next) => {
  const id = req.params.orderId;
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

router.patch("/:orderId", (req, res, next) => {
  res.status(200).json({
    message: "Update Goods",
  });
});

router.delete("/:orderId", (req, res, next) => {
  res.status(200).json({
    message: "Delete Goods",
  });
});
module.exports = router;
