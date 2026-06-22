const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categorieControllers');

router.get('/', categoryController.getAllCategories);
router.post('/', categoryController.createCategorie);
router.get('/:id', categoryController.getCategoryById);
router.put('/:id', categoryController.updateCategorie);
router.patch('/:id', categoryController.patchCategorie);
router.delete('/:id', categoryController.deleteCategorie);

module.exports = router;