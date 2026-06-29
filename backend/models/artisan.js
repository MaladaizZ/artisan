const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const bcrypt = require('bcrypt');
const { tableName } = require('sequelize/lib/model');

const Artisan = sequelize.define('artisan', {
  id_artisan: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nom_artisan: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  id_specialite: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  note_artisan: {
    type: DataTypes.DECIMAL(5,2),
    allowNull: true,
  },
  ville_artisan: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  apropos_artisan: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  email_artisan: {
    type: DataTypes.STRING(150),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  site_artisan: {
    type: DataTypes.STRING(255),
    allowNull: true,
    defaultValue: 'https://',
    validate: {
      isUrl: {
        msg: 'L’URL du site web doit être valide (ex : https://monsite.com)',
      },
    },
  },
  //id_specialite: {
    //type: DataTypes.INTEGER,
    //allowNull: false,
  //},
  top_artisan: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  }
}, {
  tableName: 'artisan',
  timestamps: false
});


module.exports = Artisan;