const express = require('express');
const router = express.Router();
const { reviewValidation } = require('../../validators/review');
const reviewControl = require('../../controllers/review');

router.post('/create', reviewValidation(), reviewControl.create); //Route for creating a review
router.post('/update/:id', reviewValidation(), reviewControl.update); //For updating already existing
router.get('/delete/:id', reviewValidation(), reviewControl.delete); //And route for deleting

module.exports = router;