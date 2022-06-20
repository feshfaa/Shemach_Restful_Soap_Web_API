const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
  {
    ProductType: {
      type: String,
      required: [true, 'Please add a product value'],
    },
    Quantity: {
        type: Number,
        required: [true, 'Please add a quantity value'],
    },
    Price: {
        type: Number,
        required: [true, 'Please add a price value'],
    },
  },
)

module.exports = mongoose.model('Product', productSchema)