const express = require("express");
const { 
  addOrder,
  getAllOrders,
  getOrdersByEmail,
  deleteOrder,
  updateOrderStatus
 } = require("../controllers/order");
//const { ObjectId } = require("mongodb");
//const { getDatabase } = require("../database");

const router = express.Router();
//const db = getDatabase();

//const orderCollection = db.collection("orders");

// Add an order
router.post("/add", addOrder);

// Load all orders
router.get("/", getAllOrders);

// Load a specific order
router.get("/:email", getOrdersByEmail);

// Delete an order
router.delete("/:id", deleteOrder);

// Update order status
router.put("/:id", updateOrderStatus);

module.exports = router;
