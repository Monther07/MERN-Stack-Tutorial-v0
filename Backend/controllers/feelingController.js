const { model } = require('mongoose')
const Feeling = require('../models/feelingModel')

// GET all feeling
const getFeelings = async (req, res) => {
  const feelings = await Feeling.Find({}).sort({ createAt: -1 })

  res.status(200).json(feelings)
}

// GET a single feeling
const getfeeling = async (req, res) => {
  // get the id from the req parameters (the route) in the URI
  const { id } = req.params

  const feeling = await Feeling.findById(id)
  if (!feeling) {
    return res.status(400).json({ error: 'no such a feeling' })
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
    res.status(400).json({ error: error.message })
  }
  res.json({ mssg: 'POST a new feelings' })
}

// DELETE a new feeling

// UPDATE a new feeling

module.exports = {
  getFeelings,
  getfeeling,
  createFeeling,
}
