const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: {
    type: String,
  },
  store: {
    type: String,
  },
  price: {
    type: Number,
  },
  date: {
    type: String,
  },
  clothingType: {
    type: String,
  },
  urls: {
    type: Array,
  },
})

module.exports = mongoose.model('Cards', schema)
