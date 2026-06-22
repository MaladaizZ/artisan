const Sequelize = require('sequelize');
const ENV = require('./index');


const sequelize = new Sequelize(ENV.DB_NAME, ENV.DB_USER, ENV.DB_PASSWORD, {
    host: ENV.DB_HOST,
    dialect: ENV.DIALECT,
});

module.exports = sequelize;
