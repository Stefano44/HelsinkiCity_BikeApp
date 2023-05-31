const stationRouter = require('express').Router()
const db = require('../config/db')

// Endpoint to fetch all stations
stationRouter.get('/', async (req, res) => {
    
    try {
        const stations = await db.query('SELECT * FROM stations')
        res.json(stations.rows)
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'An error occurred while fetching stations' })
    }
})

// Endpoint to fetch a station by ID
stationRouter.get('/:id', async (req, res) => {
    const id = req.params.id

    try {
        const result = await db.query(
            `SELECT stations.*,
            (SELECT COUNT(*) FROM journeys WHERE departure_station_id = $1) AS num_departures,
            (SELECT COUNT(*) FROM journeys WHERE return_station_id =$1) AS num_returns
            FROM stations WHERE id = $1`, [id])
        
        if (result.rows.length === 0) {
            res.status(404).json({ error: `Station with id ${id} not found` })
            return
        }

        res.json(result.rows[0])
        } catch (err) {
            console.error(err)
            res.status(500).json({ error: 'An error occurred while fetching station' })
        }   
    })

module.exports = stationRouter