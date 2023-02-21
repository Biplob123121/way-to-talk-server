const payments = require('../models/payment.model');


const newPayment = async (req, res) => {
    try {
        const payment = new payments({
            transactionId: req.body.transactionId,
            email: req.body.email,
            price: req.body.price
        })
        await payment.save();
        res.status(201).json({ acknowledged: true, payment });
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = { newPayment }