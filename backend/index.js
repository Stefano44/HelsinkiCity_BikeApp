const express = require('express')
const app = express()

const cors = require('cors');

const stationRoutes = require('./routes/stations');
const journeyRoutes = require('./routes/journeys');

app.use(cors());


app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.use('/api/stations', stationRoutes);
app.use('/api/journeys', journeyRoutes);


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });


const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})