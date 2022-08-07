const express = require('express')

const {
  getFeelings,
  getfeeling,
  createFeeling,
  deleteFeeling,
  updateFeeling,
} = require('../controllers/feelingController')
const router = express.Router()

// GET all feelings
router.get('/', getFeelings)

// GET single feelings
router.get('/:id', getfeeling)

// POST a new feelings
router.post('/', createFeeling)

// DELETE a new feelings
router.delete('/:id', deleteFeeling)

// PATCH a new feelings
router.patch('/:id', updateFeeling)

module.exports = router
