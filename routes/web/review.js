const express = require('express');
const reviewControl = require('../../controllers/review');
const router = express.Router();

//Route for displaying all reviews
router.get('/', (req, res)=>{
    reviewControl.getAll(req, res)
});

//Route to render page for create and update
router.get('/create', (req, res)=>{
    res.render('review/CreateAndUpdate')
});

//Route for displaying specific review for updating
router.get('/update/:id', (req, res)=>{
    reviewControl.getById(req, res)
});

module.exports = router;