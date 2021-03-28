const express = require('express') // Import express (Framework für node)
const { v4: uuidv4 } = require('uuid') // Import UUID, nachdem wir npm install uuid gemacht haben
const setupMongo = require('./setupMongo')

require('dotenv').config()
const { PORT = 4000 } = process.env // .env
// const mongoose = require('mongoose') // Import mongoose

setupMongo()

const app = express() // damit bekommen wir eine Express-app - App ist hier eine Instanz - keine App wie wir sie können

app.use(express.json()) //erste middleware-Funktion, müssen wir aufrufen, damit wir danach klassische Middlewares mit den HTTP-Methods schreiben können

// -----import der Card:----
app.use('/api/cards', require('./routes/cards'))

app.use(require('./routes/error'))

app.listen(PORT, () => {
  console.log(`Server listen at http://localhost:${PORT}`)
})
