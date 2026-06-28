const { Specialite } = require("../models/index");

// Récupérer toutes les spécialités
exports.getAllSpecialities = async () => {
    return await Specialite.findAll();
};

// Récupérer une spécialité par son ID
exports.getSpecialiteById = async (id) => {
    return await Specialite.findByPk(id);
};

// Créer une spécialité
exports.createSpecialite = async (data) => {
    return await Specialite.create(data);
};

// Mettre à jour une spécialité (PUT)
exports.updateSpecialite = async (id, data) => {
    const specialite = await Specialite.findByPk(id);
    if (!specialite) return null;

    return await specialite.update(data); 
};

// Modifier partiellement une spécialité (PATCH)
exports.patchSpecialite = async (id, data) => {
    const specialite = await Specialite.findByPk(id);
    if (!specialite) return null;
    return await specialite.update(data);
};

// Supprimer une spécialité
exports.deleteSpecialite = async (id) => {
    const specialite = await Specialite.findByPk(id);
    if (!specialite) return null;
    await specialite.destroy();
    return true;
};