const asyncHandler = require('express-async-handler');
const Product = require('../model/productModel');

// @desc    Get Products
// @route   GET /Products
// @access  Private
const getProduct = asyncHandler(async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products)
})

// @desc    Set Product
// @route   POST /Product
// @access  Private
const setProduct = asyncHandler(async (req, res) => {
  if (!req.body.ProductType) {
    res.status(400)
    throw new Error('Please add a ProductType field')
  }

  if (!req.body.Quantity) {
    res.status(400)
    throw new Error('Please add a Quantity field')
  }

  if (!req.body.Price) {
    res.status(400)
    throw new Error('Please add a Price field')
  }

  const product = await Product.create({
    ProductType: req.body.ProductType,
    Quantity: req.body.Quantity,
    Price: req.body.Price
  });
  res.status(200).json({ message: 'Set product' })
})

// @desc    Update Product
// @route   PUT /Product/:id
// @access  Private
const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if(!product){
    res.status(400)
    throw new Error('Product not found');
  }
  const updateProduct = await Product.findByIdAndUpdate(
    req.params.id,
    req.body, 
    {new: true,}
  );
  res.status(200).json({ message: `Update Product ${req.params.id}` })
})

// @desc    Delete shemach
// @route   DELETE /shemach/:id
// @access  Private
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if(!product){
    res.status(400)
    throw new Error('Product not found');
  }
  await product.deleteOne()
  res.status(200).json({ message: `Delete Product ${req.params.id}` })
})

module.exports = {
  getProduct,
  setProduct,
  updateProduct,
  deleteProduct,
}