const express = require("express");
const { 
  addCartOrder,
  getAllCartOrders,
  getCartOrdersByEmail,
  deleteCartOrder,
  deleteAllCartOrdersByEmail
 } = require("../controllers/cartOrder");
//const { ObjectId } = require("mongodb");
//const { getDatabase } = require("../database");

const router = express.Router();
//const db = getDatabase();

//const cartOrderCollection = db.collection("cartOrders");

// Add to cart
router.post("/add", addCartOrder);

// Load all cart orders
router.get("/", getAllCartOrders);

// Load a specific cart order
router.get("/:email", getCartOrdersByEmail);

// Delete cart order
router.delete("/:id", deleteCartOrder);

// Delete all cart orders
router.delete("/deleteAll/:id", deleteAllCartOrdersByEmail);

module.exports = router;
