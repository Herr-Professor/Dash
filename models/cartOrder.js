const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Assuming your existing model structure is as follows:
const CartOrderSchema = new Schema(
  {
    name: {
      type: Schema.Types.ObjectId,
      type: String,
      required: true
    },
    products: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: 'Product',
          required: true
        },
        quantity: {
          type: Number,
          default: 1
        },
        price: {
          type: Number,
          required: true
        },
        subtotal: {
          type: Number
        }
      }
    ]
  },
  {
    timestamps: true
  }
);

// Update the schema to calculate and add the subtotal
CartOrderSchema.pre('save', function (next) {
  this.products.forEach((product) => {
    product.subtotal = product.quantity * product.price;
  });
  next();
});

module.exports = mongoose.model('CartOrders', CartOrderSchema);
