const express = require('express');
const app = express();
const ENV = require('./config');
require('dotenv').config();


// connection au serveur
const PORT = ENV.PORT || 8080;

app.get('/', (req, res) => {
    res.send('Bienvenue sur Artisan');
});

app.listen(PORT, () => {
    console.log('Server artisan listening on port ' + PORT);
});

//connection a sequelize
const sequelize = require('./config/db');
sequelize.authenticate()
    .then(() => {
        console.log('Connection a la base de donnees reussie.');
    })
    .catch(err => {
        console.error('Impossible de se connecter à la base de donnees:', err);
    });
