const express = require('express');
const app = express();
const ENV = require('./config');
require('dotenv').config();
const cookieParser = require('cookie-Parser')
const indexRouter = require('./routes/indexRoute');
const cors = require ('cors');


//acceptez les requetes de toutes les origines
app.use(express.json());
app.use(cors({
    origin: '*'
}));


// connection au serveur
const PORT = ENV.PORT || 8080;
app.use(cookieParser());
app.use(indexRouter);

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

   
