const mongoose = require('mongoose')
const Feeling = require('../models/feelingModel')

// GET all feeling
const getFeelings = async (req, res) => {
  const feelings = await Feeling.find({}).sort({ createdAt: -1 })

  res.status(200).json(feelings)
}

// GET a single feeling
const getfeeling = async (req, res) => {
  // get the id from the req parameters (the route) in the URI
  const { id } = req.params
  // vildate the id in the db or not
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'no such feelings' })
  }
  const feeling = await Feeling.findById(id)
  if (!feeling) {
    return res.status(404).json({ error: 'no such a feeling' })
  } else {
    res.status(200).json(feeling)
  }
}

// create a new feeling
const createFeeling = async (req, res) => {
  const { feel, period, rank } = req.body

  // add the doc to db
  try {
    const feeling = await Feeling.create({ feel, period, rank })
    res.status(200).json(feeling)
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
  res.json({ mssg: 'POST a new feelings' })
}

// DELETE a new feeling
const deleteFeeling = async (req, res) => {
  // vildate the id in the db or not
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'no such feelings' })
  }

  const feeling = await Feeling.findByIdAndDelete({ _id: id })

  if (!feeling) {
    return res.status(404).json({ error: 'no such feelings' })
  }
  res.status(200).json(feeling)
}

// UPDATE a new feeling
const updateFeeling = async (req, res) => {
  // get the id from the req parameters (the route) in the URI
  const { id } = req.params
  // vildate the id in the db or not
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'no such feelings' })
  }

  const feeling = await Feeling.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    },
  )

  if (!feeling) {
    return res.status(404).json({ error: 'update no such feelings' })
  }
  res.status(200).json(feeling)
}

module.exports = {
  getFeelings,
  getfeeling,
  createFeeling,
  deleteFeeling,
  updateFeeling,
}

//push push not push push