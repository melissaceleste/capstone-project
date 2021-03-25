const express = require('express')
const Cards = require('../models/Cards')
const router = express.Router()

router.get('/', async (req, res, next) => {
  res.json(await Cards.find().catch(next))
})

router.post('/', async (req, res, next) => {
  res.json(await Cards.create(req.body).catch(next))
})

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params
  res.json(await Cards.findByIdAndDelete(id).catch(next))
})

module.exports = router
