const asyncHandler = require('express-async-handler');
const Shemach = require('../model/shemachModel');

// @desc    Get shemachs
// @route   GET /shemachs
// @access  Private
const getShemach = asyncHandler(async (req, res) => {
  const shemachs = await Shemach.find();
  res.status(200).json(shemachs);
})

// @desc    Set shemach
// @route   POST /shemachs
// @access  Private
const setShemach = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400)
    throw new Error('Please add a name field')
  }

  if (!req.body.familyNumber) {
    res.status(400)
    throw new Error('Please add a familyNumber field')
  }

  const shemach = await Shemach.create({
    name: req.body.name,
    familyNumber: req.body.familyNumber
  });
  res.status(200).json({ message: 'Set goal' })
})

// @desc    Update shemach
// @route   PUT /shemach/:id
// @access  Private
const updateShemach = asyncHandler(async (req, res) => {
  const shemach = await Shemach.findById(req.params.id);
  if(!shemach){
    res.status(400)
    throw new Error('Shemach not found');
  }
  const updatedShemach = await Shemach.findByIdAndUpdate(
    req.params.id,
    req.body, 
    {new: true,}
  );
  res.status(200).json({ message: `Update shemach ${req.params.id}` })
})

// @desc    Delete shemach
// @route   DELETE /shemach/:id
// @access  Private
const deleteShemach = asyncHandler(async (req, res) => {
  const shemach = await Shemach.findById(req.params.id);

  if (!shemach) {
    res.status(400)
    throw new Error('Shemach deleted')
  }

  await shemach.deleteOne()
  res.status(200).json({ message: `Delete shemach ${req.params.id}` })
})

module.exports = {
  getShemach,
  setShemach,
  updateShemach,
  deleteShemach,
}