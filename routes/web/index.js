const express = require('express')
const reviewRouter = require('./review')
const router = express.Router()

router.get('/', (req, res) => { // Route for rendering the home page
  res.render('index'); 
  });
router.use('/review', reviewRouter) // Route for all review-related pages

module.exports = router