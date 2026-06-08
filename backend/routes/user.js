const express = require('express');
const router= express.Router();

const service = require('../service/users');

//les infos d'un utilisateur
router.get('/:id', service.getUserById);

//ajoutrer un utilisateur
router.put('/add', service.add);

//modifier un utilisateur
router.patch('/:id', service.update);

//supprimer un utilisateur
router.delete('/:id', service.delete);



module.exports = router;
