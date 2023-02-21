const express = require('express');
const router = express.Router();
const VerifyJWT = require('../jwt/jwtToken')

const { newReview, getReview } = require('../controllers/review.controller');


router.get("/", getReview);
router.get("/:id",);
router.post("/", newReview);
router.put("/:id",)

module.exports = router;