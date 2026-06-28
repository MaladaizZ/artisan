const { Categorie } = require("../models/index");

// Récupérer toutes les catégories
exports.getAllCategories = async () => {
    return await Categorie.findAll();
};

// Récupérer une catégorie par son ID
exports.getCategoryById = async (id) => {
    return await Categorie.findByPk(id);
};

// Créer une catégorie
exports.createCategory = async (data) => {
    return await Categorie.create(data);
};

// Mettre à jour une catégorie (PUT)
exports.updateCategory = async (id, data) => {
    const categorie = await Categorie.findByPk(id);
    if (!categorie) return null;

    return await categorie.update(data); // Sequelize gère tout
};

// Modifier partiellement une catégorie (PATCH)
exports.patchCategory = async (id, data) => {
    const categorie = await Categorie.findByPk(id);
    if (!categorie) return null;

    return await category.update(data);
};

// Supprimer une catégorie
exports.deleteCategory = async (id) => {
    const categorie = await Categorie.findByPk(id);
    if (!categorie) return false;

    await categorie.destroy();
    return true;
};