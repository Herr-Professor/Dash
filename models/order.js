const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrderSchema = new Schema(
  {
    name: {
      // type: Schema.Types.ObjectId,
      // ref: 'User',
      type: String,
      required: true
    },
    products: [
      {
        price: {
          type: Number,
          required: true
        },
        quantity: {
          type: Number,
          default: 1
        }
      }
    ],
    date: {
      type: Date,
      required: true
    },
    status: {
      type: String,
      default: "pending"
    }
  },
   {
  timestamps: true
}
);

module.exports = mongoose.model('Order', OrderSchema);