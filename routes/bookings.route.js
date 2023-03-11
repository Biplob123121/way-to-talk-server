const express = require('express');
const router = express.Router();
const VerifyJWT = require('../jwt/jwtToken')

const { getBookings, newBooking, getSingleBooking, updateBooking, deleteBooking } = require('../controllers/booking.controller');


router.get("/", VerifyJWT, getBookings);
router.get("/:id", getSingleBooking);
router.post("/", newBooking);
router.put("/:id", updateBooking)
router.delete("/:id", deleteBooking)

module.exports = router;