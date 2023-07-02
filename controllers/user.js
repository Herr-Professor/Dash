const User = require("../models/user");

// Add a user
exports.addUser = async (req, res) => {
  const { username, email, password, isAdmin } = req.body;
  try {
    const user = await User.create({ username, email, password, isAdmin });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    console.error("Error getting users:", error);
    res.status(500).send({ error: "Failed to get users" });
  }
};

// Get user by email
exports.getUserByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const user = await User.findOne({ email });
    res.send(user);
  } catch (error) {
    console.error("Error getting user by email:", error);
    res.status(500).send({ error: "Failed to get user by email" });
  }
};

// Delete a user
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await User.findByIdAndDelete(id);
    res.send(result);
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).send({ error: "Failed to delete user" });
  }
};

// Update user as admin by email
exports.updateUserAsAdminByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const updatedUser = await User.findOneAndUpdate(
      { email },
      { isAdmin: true },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(updatedUser);
  } catch (error) {
    console.error("Error updating user as admin by email:", error);
    res.status(500).send({ error: "Failed to update user as admin" });
  }
};
