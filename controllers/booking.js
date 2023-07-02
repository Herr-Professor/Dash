const Booking = require("../models/booking");

// Add a booking
exports.addBooking = async (req, res) => {
  const {name, email, phone, numberOfPeople, date}  = req.body;
  try{
    const booking = await Booking.create({name, email, phone, numberOfPeople, date})
    res.status(200).json(booking);
  
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// Get all bookings
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    
    res.send(bookings);
  } catch (error) {
    console.error("Error getting bookings:", error);
    res.status(500).send({ error: "Failed to get bookings" });
  }
};

// Get bookings by email
exports.getBookingsByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const bookings = await Booking.find({ email });
    if (bookings.length === 0) {
      return res.status(404).json({ error: "No bookings found" });
    }
    res.status(200).json(bookings);
  } catch (error) {
    console.error("Error getting bookings by email:", error);
    res.status(500).json({ error: "Failed to get bookings by email" });
  }
};


// Delete a booking
exports.deleteBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Booking.findByIdAndDelete(id);
    res.send(result);
  } catch (error) {
    console.error("Error deleting booking:", error);
    res.status(500).send({ error: "Failed to delete booking" });
  }
};
