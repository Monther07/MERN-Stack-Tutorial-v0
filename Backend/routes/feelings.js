const express = require('express')
const Feeling = require('../models/feelingModel')

const router = express.Router()

//GET all feelings
router.get('/', (req, res) => {
  res.json({ mssg: 'GET all feelings' })
})

// GET single feelings
router.get('/:id', (req, res) => {
  res.json({ mssg: 'GET single feelings' })
})

// POST a new feelings
router.post('/', async (req, res) => {
  const { feel, period, rank } = req.body

  try {
    const feeling = await Feeling.create({ feel, period, rank })
    res.status(200).json(feeling)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
  res.json({ mssg: 'POST a new feelings' })
})

// DELETE a new feelings
router.delete('/:id', (req, res) => {
  res.json({ mssg: 'DELETE a feelings' })
})

// PATCH a new feelings
router.patch('/:id', (req, res) => {
  res.json({ mssg: 'UPDATE a feelings' })
})

module.exports = router
