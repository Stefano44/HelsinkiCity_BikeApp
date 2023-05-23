const journeyRouter = require('express').Router()
const db = require('../config/db')

journeyRouter.get('/', async (req, res) => {
    try {
        const journeys = await db.query('SELECT * FROM journeys LIMIT 100');
        res.json(journeys.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while fetching stations' });
    }
});

journeyRouter.get('/:id', async (req, res) => {
    const id = req.params.id

    try {
        const result = await db.query('SELECT * FROM journeys WHERE id = $1', [id]);
        
        if (result.rows.length > 0) {
            res.json(result.rows[0])
        } else {
            res.status(404).json({ error: 'Journey not found' })
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while fetching stations' });
    }
});

module.exports = journeyRouter;