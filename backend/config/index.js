const dotenv = require('dotenv');
dotenv.config()

const ENV = {
    PORT: process.env.PORT,
    DB_NAME: process.env.DB_NAME,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_HOST: process.env.DB_HOST,
    DIALECT: process.env.DIALECT
}

module.exports= ENV;