const { default: mongoose } = require("mongoose");

const productSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "give a title"],
  },

  img: {
    type: String,
    // required: [true, "provide a img"],
  },

  phoneNo: {
    type: String,
    required: [true, "provide a valid Phone No."],
  },

  email: {
    type: String,
    required: [true, "provide a Email"],
  },

  price: {
    type: Number,
    required: [true, "Provide a valid price"],
  },

  name: {
    type: String,
    required: [true, "Provide a valid name"],
  },

  category: {
    type: String,
    required: [true, "provide a Category"],
  },
});

module.exports = mongoose.model("Product", productSchema);
