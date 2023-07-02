const express = require("express");
//const { ObjectId } = require("mongodb");
//const { getDatabase } = require("../database");
const { 
  getBookingsByEmail,
  getAllBookings,
  deleteBooking,
  addBooking
 } = require("../controllers/booking");

const router = express.Router();
//const db = getDatabase();

//const bookingCollection = db.collection("bookings");

// Add a booking
router.post("/add", addBooking);

// Load all bookings
router.get("/", getAllBookings);

// Load a specific booking
router.get("/:email", getBookingsByEmail);

// Delete a booking
router.delete("/:id", deleteBooking);

// Update booking status
router.put("/:id", async (req, res) => {
  //const filter = { _id: ObjectId(req.params.id) };
  //const options = { upsert: true };
  //const updateDoc = {
    //$set: {
      //status: "Approved",
    //},
  //};
  //const result = await bookingCollection.updateOne(filter, updateDoc, options);
  res.json({mssg: 'update bookings by id'});
});

module.exports = router;
