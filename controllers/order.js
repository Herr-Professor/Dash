const Order = require("../models/order");

// Add an order
exports.addOrder = async (req, res) => {
  const {name, products:[price, quantity], date}  = req.body;
  try{
    const order = await Order.create({name, products:[price, quantity], date})
    res.status(200).json(order);
  
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// Get all orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.send(orders);
  } catch (error) {
    console.error("Error getting orders:", error);
    res.status(500).send({ error: "Failed to get orders" });
  }
};

// Get orders by email
exports.getOrdersByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const orders = await Order.find({ email });
    res.send(orders);
  } catch (error) {
    console.error("Error getting orders by email:", error);
    res.status(500).send({ error: "Failed to get orders by email" });
  }
};

// Delete an order
exports.deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Order.findByIdAndDelete(id);
    if (result) {
      res.send({ message: "Order deleted successfully" });
    } else {
      res.status(404).send({ error: "Order not found" });
    }
  } catch (error) {
    console.error("Error deleting order:", error);
    res.status(500).send({ error: "Failed to delete order" });
  }
};


// Update order status
exports.updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const result = await Order.findByIdAndUpdate(
      id,
      { $set: { status } },
      { new: true }
    );
    res.send(result);
  } catch (error) {
    console.error("Error updating order status:", error);
    res.status(500).send({ error: "Failed to update order status" });
  }
};
