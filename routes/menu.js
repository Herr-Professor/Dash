const express = require("express");
const { 
  addMenu,
  getAllMenus,
  deleteMenu,
  updateMenu
 } = require("../controllers/menu");

const router = express.Router();

// Load all menus shown on the home page
router.get("/", getAllMenus);

// Add a single menu by admin
router.post("/add", addMenu);

// Delete a menu
router.delete("/:id", deleteMenu);

// Update a menu
router.put("/update/:id", updateMenu);

module.exports = router;
