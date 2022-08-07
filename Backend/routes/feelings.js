const express = require('express')

const {
  getFeelings,
  getfeeling,
  createFeeling,
} = require('../controllers/feelingController')
const router = express.Router()

// GET all feelings
router.get('/', getFeelings)

// GET single feelings
router.get('/:id', getfeeling)

// POST a new feelings
router.post('/', createFeeling)

// DELETE a new feelings
router.delete('/:id', (req, res) => {
  res.json({ mssg: 'DELETE a feelings' })
})

// PATCH a new feelings
router.patch('/:id', (req, res) => {
  res.json({ mssg: 'UPDATE a feelings' })
})

module.exports = router
