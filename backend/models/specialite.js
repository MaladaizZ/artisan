const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Specialite = sequelize.define(
  "Specialite",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_categorie: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "specialites",
    timestamps: false,
  },
);

module.exports = Specialite;