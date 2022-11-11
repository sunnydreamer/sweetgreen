const mongoose = require("mongoose");

const dishSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Each user must have a name"],
  },
  picture: {
    type: String,
  },
  category: {
    type: String,
  },
  description: {
    type: String,
  },
  cal: {
    type: Number,
  },
  price: {
    type: Number,
    required: true,
  },

  ingredients: {
    type: Object,
  },
});

const Dish = mongoose.model("Dish", dishSchema);
module.exports = Dish;
