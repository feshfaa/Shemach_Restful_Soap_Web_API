const mongoose = require('mongoose')

const shemachSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name value'],
    },
    familyNumber: {
        type: Number,
        required: [true, 'Please add a familyNumber value'],
    },
  },
)

module.exports = mongoose.model('Shemach', shemachSchema)