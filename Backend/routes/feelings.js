const express = require('express')

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
router.post('/', (req, res) => {
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