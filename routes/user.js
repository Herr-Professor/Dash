const express = require("express");
const { 
  addUser, 
  getAllUsers, 
  getUserByEmail, 
  deleteUser, 
  updateUserAsAdminByEmail 
} = require("../controllers/user");

const router = express.Router();

router.post("/", addUser);
router.get("/", getAllUsers);
router.get("/:email", getUserByEmail);
router.put("/:email", updateUserAsAdminByEmail);
router.delete("/:id", deleteUser);

module.exports = router;
