const express = require('express');
const router = express.Router();

const userRoute = require('../routes/userRoute');
const artisanRoute = require('../routes/artisanRoute');
const serviceRoute = require('../routes/serviceRoute');

router.get('/', async (req, res) => {
    res.status(200).json({
        name: process.env.NAME || 'Artisan API',
        version:'1.0',
        statut: 200,
        message: 'Welcome to Artisan API'
    });
});

