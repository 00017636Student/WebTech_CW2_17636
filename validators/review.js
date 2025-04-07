const { body } = require('express-validator'); 
//This function creates validation for text fields in creating and updating a review so they will not be empty
const reviewValidation = () => { 

return [
    body('title')
    .notEmpty().withMessage('Please fill out title field'),
    body('author')
    .notEmpty().withMessage('Please fill out author field'),
    body('genre')
    .notEmpty().withMessage('Please fill out genre field'),
    body('rating')
    .notEmpty().withMessage('Please rate the book'),
    body('fullReview')
    .notEmpty().withMessage('Please fill out review field'),
    ];
};

module.exports = {
reviewValidation
};