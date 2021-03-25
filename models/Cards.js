const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  // id?
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
  images: {
    type: String,
  },
})

module.exports = mongoose.model('Cards', schema)
