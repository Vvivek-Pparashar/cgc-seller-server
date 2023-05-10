const asyncHandler = require("express-async-handler");
const Product = require("../Model/ProductSchema");

//@desc     get all Products
//@route    GET /api/Products
//@access   public
const getProducts = asyncHandler(async (req, res) => {
  const Products = await Product.find();
  res.status(200).json(Products);
});

//@desc     get Product by id
//@route    GET /api/Products/:id
//@access   public

const getProduct = asyncHandler(async (req, res) => {
  const { id: taskId } = req.params;
  const Product = await Product.findOne({ _id: taskId });

  if (!Product) {
    return res.status(404).json({ msg: "No Product for this id" });
  }
  res.status(200).json({ Product });
});

//@desc     post a Product
//@route    POST /api/Products
//@access   private
const postProduct = asyncHandler(async (req, res) => {
  if (!req.body.title) {
        console.log(req.body)
    res.status(400);
    throw new Error("Product details missing");
  }

  const product = await Product.create(req.body);

  res.status(201).json(product);
});

//@desc     update a Product
//@route    PUT /api/Products/:id
//@access   private

const putProduct = asyncHandler(async (req, res) => {
  const Product = await Product.findById(req.params.id);

  if (!Product) {
    res.status(400);
    throw new Error("Product not found");
  }

  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedProduct);
});

//@desc     delete a Product
//@route    PUT /api/Products/:id
//@access   private
const deleteProduct = asyncHandler(async (req, res) => {
  const Product = await Product.findById(req.params.id);

  if (!Product) {
    console.log("vivek");
    res.status(404);
    throw new Error("Product not found");
  }

  await Product.findOneAndDelete({ _id: Product });
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getProducts,
  getProduct,
  postProduct,
  putProduct,
  deleteProduct,
};
