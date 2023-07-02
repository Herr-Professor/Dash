const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookingSchema = new Schema({
  name: {
    // type: Schema.Types.ObjectId,
    // ref: 'User',
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  numberOfPeople: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    default: "pending"
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Booking', BookingSchema);


