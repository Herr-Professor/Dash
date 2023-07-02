const { Schema, model } = require("mongoose");

const menuSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: Buffer,
    required: true,
  },
},{
    timestamps: true
  });

const Menu = model("Menu", menuSchema);

module.exports = Menu;
