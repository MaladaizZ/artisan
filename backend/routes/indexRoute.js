const express = require('express');
const router = express.Router();
//const artisanRoutes = require('./artisanRoute');
//const categoryRoutes = require('./categorieRoute');
const specialiteRoutes = require('./specialiteRoute');

//const artisanRoute = require('./artisanRoute');

router.get('/', async (req, res) => {
    res.status(200).json({
        name: process.env.NAME || 'Artisan API',
        version:'1.0',
        statut: 200,
        message: 'Bienvenue sur l\'API Artisan'
    });
});

router.get('/artisan', async (req, res )=>{
    res.statut(200).json({
        name: 'erwan'
    })
})

module.exports = router;