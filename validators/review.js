const { body } = require('express-validator');


const reviewValidation = () => {

return [

body('title')

.notEmpty().withMessage('Please fill out title field'),

body('author')

.notEmpty().withMessage('Please fill out author field'),

body('genre')

.notEmpty().withMessage('Please fill out genre field'),

body('fullReview')

.notEmpty().withMessage('Please fill out review field'),

];

};


module.exports = {

reviewValidation

};