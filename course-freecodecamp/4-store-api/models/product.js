const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: {
    type: String,
    reqired: [true, "Please provide product name"],
  },
  price: {
    type: Number,
    reqired: [true, "Please provide product price"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {    // limit
      values: ["IKEA", "VIVIEN", "Trendyol", "Amazon"],
      message: 'the company that you request is not supported',        // if values doesn't match, it will show the error message
    },
  },
});

module.exports = mongoose.model("Product", ProductSchema);
