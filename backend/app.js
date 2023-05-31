const express = require('express')
const app = express()
const path = require('path');


const cors = require('cors')

const stationRoutes = require('./routes/stations')
const journeyRoutes = require('./routes/journeys')

// Using cors middleware
app.use(cors())

app.use(express.static(path.join(__dirname, 'build')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

// Using imported routes
app.use('/api/stations', stationRoutes)
app.use('/api/journeys', journeyRoutes)

// Middleware for error handling
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  });



module.exports = app