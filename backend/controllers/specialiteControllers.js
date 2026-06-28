const specialiteService = require("../services/specialiteService");

exports.getAllSpecialities = async (req, res) => {
    try {
        const specialities = await specialiteService.getAllSpecialities();
        res.json(specialities);
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
};

exports.getSpecialiteById = async (req, res) => {
    try {
        const specialite = await specialiteService.getSpecialiteById(req.params.id);
        if (!specialite)
            return res.status(404).json({ message: "Spécialité introuvable" });
        res.json(specialite);
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
};

exports.createSpecialite = async (req, res) => {
    try {
        const specialite = await specialiteService.createSpecialite(req.body);
        res.status(201).json(Specialite);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateSpecialite = async (req, res) => {
    try {
        const specialite = await specialiteService.updateSpecialite(req.params.id, req.body);
        if (!specialite)
            return res.status(404).json({ message: "Spécialité introuvable" });
        res.json(specialite);
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
};

exports.patchSpecialite = async (req, res) => {
    try {
           const specialite = await specialiteService.patchSpecialite(req.params.id, req.body);
        if (!specialite)
            return res.status(404).json({ message: "Spécialité introuvable" });
        res.json(Specialite);
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
};

exports.deleteSpecialite = async (req, res) => {
    try {
         const specialite = await SpecialiteService.deleteSpecialite(req.params.id);
        if (!specialite)
            return res.status(404).json({ message: "Spécialité introuvable" });
        res.status(204);
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
    
};