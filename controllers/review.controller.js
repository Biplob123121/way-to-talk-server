const reviews = require('../models/review.model');


const newReview = async (req, res) => {
    try {
        const review = new reviews({
            name: req.body.name,
            email: req.body.email,
            review: req.body.review
        })
        await review.save();
        res.status(201).json({ acknowledged: true, review });
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const getReview = async (req, res) => {
    try {
        const allReview = await reviews.find();
        res.status(200).json(allReview)
    } catch (error) {
        res.status(500).send(error.message);
    }
}
module.exports = { newReview, getReview }