const express = require('express');
const router = express.Router();
const VerifyJWT = require('../jwt/jwtToken')

const { getBookings, newBooking } = require('../controllers/booking.controller');


router.get("/", VerifyJWT, getBookings);
router.post("/", newBooking);

module.exports = router;