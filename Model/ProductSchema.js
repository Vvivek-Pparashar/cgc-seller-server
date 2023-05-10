const { default: mongoose } = require("mongoose");

const productSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "give a title"],
  },

  img: {
    type: String,
    required: [true, "provide a img"],
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
    type: String,
    required: [true, "Provide a valid price"],
  },

  productType: {
    type: String,
    required: [true, "provide a productType"],
  },

  description: {
    type: String,
  },

  password: {
    type: String,
    required: [true, "Provide a Valid Password"],
  },
});

module.exports = mongoose.model("Product", productSchema);
