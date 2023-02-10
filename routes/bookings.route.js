const express = require('express');
const router = express.Router();

const { getBookings, newBooking } = require('../controllers/booking.controller');


router.get("/", getBookings);
router.post("/", newBooking);

module.exports = router;