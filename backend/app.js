const express = require('express')
const app = express()

const cors = require('cors')

const stationRoutes = require('./routes/stations')
const journeyRoutes = require('./routes/journeys')

// Using cors middleware
app.use(cors())

// Root route that sends "Hello World!"
app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
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