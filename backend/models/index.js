const Artisan = require('./artisan');
const Specialite = require('./specialite');
const Categorie = require('./categorie');

// Relation 1:N entre Categorie et Specialite
Categorie.hasMany(Specialite, { foreignKey: 'Cat_Id' });
Specialite.belongsTo(Categorie, { foreignKey: 'Cat_Id' });

// Relation 1:N entre Specialite et Artisan
Specialite.hasMany(Artisan, { foreignKey: 'Spe_Id' });
Artisan.belongsTo(Specialite, { foreignKey: 'Spe_Id' });


module.exports = { Categorie, Specialite, Artisan };