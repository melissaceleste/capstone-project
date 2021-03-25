const mongoose = require('mongoose')

module.exports = function setupMongo() {
  mongoose
    .connect('mongodb://localhost/capstone', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to mongodb'))
    .catch(error => console.error('Could not connect to mongodb', error))
}

/* mongoose
  .connect('mongodb://localhost/lean-coffee-board', {
    // verbindet mongo-DB mit lean-coffee-board
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('connected to mongodb'))
  .catch(error => console.log('could not connect to mongodb', error))
 */
