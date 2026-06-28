const express = require('express');
const router = express.Router();
const specialiteController = require('../controllers/specialiteControllers');

router.get('/', specialiteController.getAllSpecialities);
router.post('/', specialiteController.createSpecialite);
router.get('/:id', specialiteController.getSpecialiteById);
router.put('/:id', specialiteController.updateSpecialite);
router.patch('/:id', specialiteController.patchSpecialite);
router.delete('/:id', specialiteController.deleteSpecialite);

module.exports = router;