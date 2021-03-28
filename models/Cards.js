const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  // id: { type: uuid },
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
    // url: String,
    type: String,
    data: Buffer, //  allows us to store our image as data in the form of arrays
  },
})

module.exports = mongoose.model('Cards', schema)
