const CartOrder = require("../models/cartOrder");
const user = require('../models/user');

// Add a cart order
exports.addCartOrder = async (req, res) => {

// Add a cart order
exports.addCartOrder = async (req, res) => {
  const {userId, products:[productId, quantity]}  = req.body;
  try{
    const cartorder = await CartOrder.create({userId, products:[productId, quantity]})
    res.status(200).json(cartorder);
  
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// Get all cart orders
exports.getAllCartOrders = async (req, res) => {
  try {
    const cartOrders = await CartOrder.find();
    res.send(cartOrders);
  } catch (error) {
    console.error("Error getting cart orders:", error);
    res.status(500).send({ error: "Failed to get cart orders" });
  }
};

// Get cart orders by email
exports.getCartOrdersByEmail = async (req, res) => {
  try {
    if (!req.user || !req.user.email) {
      return res.status(400).send({ error: 'Invalid user data' });
    }

    const userEmail = req.user.email;

    // Retrieve cart orders for the user with the specified email
    const cartOrders = await CartOrder.find({ email: userEmail });

    res.send(cartOrders);
  } catch (error) {
    console.error("Error getting cart orders by email:", error);
    res.status(500).send({ error: "Failed to get cart orders by email" });
  }
};


// Delete a cart order
exports.deleteCartOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await CartOrder.findByIdAndDelete(id);
    res.send(result);
  } catch (error) {
    console.error("Error deleting cart order:", error);
    res.status(500).send({ error: "Failed to delete cart order" });
  }
};

// Delete all cart orders by email
exports.deleteAllCartOrdersByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const result = await CartOrder.deleteMany({ email });

    res.send(result);
  } catch (error) {
    console.error("Error deleting cart orders by email:", error);
    res.status(500).send({ error: "Failed to delete cart orders by email" });
  }
};

  try{
    const cartorder = await CartOrder.create({userId, products:[productId, quantity]})
    res.status(200).json(cartorder);
  
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// Get all cart orders
exports.getAllCartOrders = async (req, res) => {
  try {
    const cartOrders = await CartOrder.find();
    res.send(cartOrders);
  } catch (error) {
    console.error("Error getting cart orders:", error);
    res.status(500).send({ error: "Failed to get cart orders" });
  }
};

// Get cart orders by email
exports.getCartOrdersByEmail = async (req, res) => {
  try {
    const userEmail = req.user.email; // Assuming the user's email is available in req.user.email

    // Retrieve cart orders for the user with the specified email
    const cartOrders = await CartOrders.find({ email: userEmail });

    res.send(cartOrders);
  } catch (error) {
    console.error("Error getting cart orders by email:", error);
    res.status(500).send({ error: "Failed to get cart orders by email" });
  }
};


// Delete a cart order
exports.deleteCartOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await CartOrder.findByIdAndDelete(id);
    res.send(result);
  } catch (error) {
    console.error("Error deleting cart order:", error);
    res.status(500).send({ error: "Failed to delete cart order" });
  }
};

// Delete all cart orders by email
exports.deleteAllCartOrdersByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const result = await CartOrder.deleteMany({ email });
    res.send(result);
  } catch (error) {
    console.error("Error deleting cart orders by email:", error);
    res.status(500).send({ error: "Failed to delete cart orders by email" });
  }
};
