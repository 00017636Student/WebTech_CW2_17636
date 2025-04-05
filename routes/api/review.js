
const express = require('express');
const router = express.Router();
const { reviewValidation } = require('../../validators/review');
const reviewControl = require('../../controllers/review');


router.post('/create', reviewValidation(), reviewControl.create);
router.post('/update/:id', reviewValidation(), reviewControl.update);
router.get('/delete/:id', reviewValidation(), reviewControl.delete);

module.exports = router;