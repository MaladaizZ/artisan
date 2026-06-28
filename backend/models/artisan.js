const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const bcrypt = require('bcrypt');

const Artisan = sequelize.define('Artisan', {
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
  specialiteId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  top_artisan: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  }
}, {
  timestamps: true,   // Crée createdAt et updatedAt automatiquement
});

module.exports = Artisan;