const express = require('express');
const router = express.Router();
const artisanRoutes = require('./artisanRoute');
const categoryRoutes = require('./categorieRoute');
const specialityRoutes = require('./specialiteRoute');

const artisanRoute = require('./artisanRoute');

router.get('/', async (req, res) => {
    res.status(200).json({
        name: process.env.NAME || 'Artisan API',
        version:'1.0',
        statut: 200,
        message: 'Bienvenue sur l\'API Artisan'
    });
});

module.exports = router;