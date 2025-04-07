const { validationResult } = require('express-validator');
const reviewService = require('../services/review');
const reviewControl = { //Object which contains all required functions such as getting all or exact review, creating new, updating and deleting reviews
    getById: (req, res) => {
        try {
            const review = reviewService.getById(req, res);
            res.render('review/CreateAndUpdate', { review })
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },


    getAll: (req, res) => {
        try {
            const reviews = reviewService.getAll(req, res);
            res.render('review/all', { reviews })
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
        
    create: async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render('review/CreateAndUpdate', { errors: errors.array(), review: req.body });
        }
        try {
            await reviewService.insert(req, res);
            res.redirect('/review');
        } 
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    update: async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render('review/CreateAndUpdate', { errors: errors.array(), review: req.body });
        }
        try {
            const updatedreview = reviewService.update(req, res);
            if (!updatedreview) {
                return res.status(404).json({ error: 'Review' });
            }
            res.redirect('/review');
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        },

    delete: (req, res) => {
        try {
            const removedReview = reviewService.delete(req, res);
            if (!removedReview) {
                return res.status(404).json({ error: 'review not found' });
            }
            res.redirect('/review');
        } 
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}


module.exports = reviewControl