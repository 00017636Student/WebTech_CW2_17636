const express = require('express')
const reviewRouter = require('./review')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index'); 
  });
router.use('/review', reviewRouter)

module.exports = router