const Artisan = require('./artisan');
const Specialite = require('./specialite');
const Categorie = require('./categorie');

// Relation 1:N entre Categorie et Specialite
Categorie.hasMany(Specialite, { foreignKey: 'Cat_Id' });
Specialite.belongsTo(Categorie, { foreignKey: 'Cat_Id' });

// Relation 1:N entre Specialite et Artisan
Specialite.hasMany(Artisan, { foreignKey: 'id_specialite' });
Artisan.belongsTo(Specialite, { foreignKey: 'id_specialite' });


module.exports = { Categorie, Specialite, Artisan };