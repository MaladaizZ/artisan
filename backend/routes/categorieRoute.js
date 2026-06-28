const express = require('express');
const router = express.Router();
const categorieController = require('../controllers/categorieControllers');

router.get('/', categorieController.getAllCategories);
router.post('/', categorieController.createCategorie);
router.get('/:id', categorieController.getCategoryById);
router.put('/:id', categorieController.updateCategorie);
router.patch('/:id', categorieController.patchCategorie);
router.delete('/:id', categorieController.deleteCategorie);

module.exports = router;