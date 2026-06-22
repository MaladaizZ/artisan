const categoryService = require("../services/categoryService");

exports.getAllCategories = async (req, res) => {
    const categories = await categoryService.getAllCategories();
    try {
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error: err.message });
    }
};

exports.getCategoryById = async (req, res) => {
    const category = await categoryService.getCategoryById(req.params.id);
    try {
        if (!category)
            return res.status(404).json({ message: "Categorie introuvable" });
        res.json(category);
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error: err.message });
    }
};

exports.createCategorie = async (req, res) => {
    try {
        const category = await categoryService.createCategory(req.body);
        res.status(201).json(category).send('Categorie créée avec succès');
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updateCategorie = async (req, res) => {
    const category = await categoryService.patchCategory(req.params.id, req.body);
    try {
        if (!category)
            return res.status(404).json({ message: "Categorie introuvable" });
        res.json(category).send('Categorie modifiée avec succès');
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error: err.message });
    }
};

exports.patchCategorie = async (req, res) => {
    const category = await categoryService.patchCategory(req.params.id, req.body);
    try {
        if (!category)
            return res.status(404).json({ message: "Categorie introuvable" });
        res.json(category).send('Categorie modifiée avec succès');
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error: err.message });
    }
};

exports.deleteCategorie = async (req, res) => {
    console.log("ID reçu :", req.params.id);
    const category = await categoryService.deleteCategory(req.params.id);
    try {
        if (!category)
            return res.status(404).json({ message: "Categorie introuvable" });
        res.status(204).send('Categorie supprimée avec succès');
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error: err.message });
    }
    
};