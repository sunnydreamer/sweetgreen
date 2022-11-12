const mongoose = require("mongoose");

const addOnSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Each user must have a name"],
  },
  picture: {
    type: String,
  },
  category: {
    type: String,
    enum: {
      values: ["bases", "toppings", "premiums", "dressings"],
    },
  },
  price: {
    type: String,
  },
  cal: {
    type: Number,
  },
});

const AddOn = mongoose.model("AddOn", addOnSchema);
module.exports = AddOn;
