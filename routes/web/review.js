const express = require('express');
const reviewControl = require('../../controllers/review');
const router = express.Router();

router.get('/', (req, res)=>{
    reviewControl.getAll(req, res)
    });


router.get('/create', (req, res)=>{
res.render('review/CreateAndUpdate')

});

router.get('/update/:id', (req, res)=>{
    reviewControl.getById(req, res)
    });


module.exports = router;