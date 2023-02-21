const express = require('express');
const router = express.Router();
const VerifyJWT = require('../jwt/jwtToken')

const { getBookings, newBooking, getSingleBooking } = require('../controllers/booking.controller');


router.get("/", VerifyJWT, getBookings);
router.get("/:id", getSingleBooking);
router.post("/", newBooking);

module.exports = router;