const express = require('express');
const router = express.Router();
const artisanRoutes = require('./artisanRoute');
const categorieRoutes = require('./categorieRoute');
const specialiteRoutes = require('./specialiteRoute');


router.get('/', async (req, res) => {
    res.status(200).json({
        name: process.env.NAME || 'Artisan API',
        version:'1.0',
        statut: 200,
        message: 'Bienvenue sur l\'API Artisan'
    });
});

router.use('/artisan', artisanRoutes);
router.use('/categorie', categorieRoutes);
router.use('/specialite', specialiteRoutes);

module.exports = router;