const Menu = require("../models/menu");

// Add a menu
exports.addMenu = async (req, res) => {
  const { name, price, description, image } = req.body;
  try {
    const menu = await Menu.create({ name, price, description, image });
    res.status(200).json(menu);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// Get all menus
exports.getAllMenus = async (req, res) => {
  try {
    const menus = await Menu.find({}).sort({createdAt: -1});
    res.status(200).json(menus);
  } catch (error) {
    console.error("Error getting menus:", error);
    res.status(500).send({ error: "Failed to get menus" });
  }
};

// Delete a menu
exports.deleteMenu = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Menu.findByIdAndDelete(id);
    if (result) {
      res.status(200).json({ message: "Menu deleted successfully" });
    } else {
      res.status(404).json({ error: "Menu not found" });
    }
  } catch (error) {
    console.error("Error deleting menu:", error);
    res.status(500).json({ error: "Failed to delete menu" });
  }
};

// Update a menu
exports.updateMenu = async (req, res) => {
  const { id } = req.params;
  const { name, price, description, image } = req.body;

  try {
    const updatedMenu = await Menu.findByIdAndUpdate(
      id,
      { name, price, description, image },
      { new: true }
    );

    if (updatedMenu) {
      res.json({ message: "Menu updated successfully" });
    } else {
      res.status(404).json({ message: "Menu not found" });
    }
  } catch (error) {
    console.error("Error updating menu:", error);
    res.status(500).json({ message: "Failed to update menu" });
  }
};

