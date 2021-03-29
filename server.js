const express = require('express')
const { v4: uuidv4 } = require('uuid')
const setupMongo = require('./setupMongo')

require('dotenv').config()
const { PORT = 4000 } = process.env

setupMongo()

const app = express()

app.use(express.json())

app.use(express.static('./client/build'))

app.use('/api/cards', require('./routes/cards'))

app.use(require('./routes/error'))

app.listen(PORT, () => {
  console.log(`Server listen at http://localhost:${PORT}`)
})
