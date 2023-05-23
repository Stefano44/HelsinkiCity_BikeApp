const stationRouter = require('express').Router()
const db = require('../config/db')

stationRouter.get('/', async (req, res) => {
    try {
        const stations = await db.query('SELECT * FROM stations');
        res.json(stations.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while fetching stations' });
    }
});

module.exports = stationRouter;