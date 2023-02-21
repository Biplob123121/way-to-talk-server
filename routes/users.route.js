const express = require('express');
const router = express.Router();

const { createUser, getUser, updateUser, getAdmin } = require('../controllers/user.controller');
const VerifyJWT = require('../jwt/jwtToken');
const VerifyAdmin = require('../VerifyAdmin/VerifyAdmin');





router.get("/", getUser);
router.get("/admin/:email", getAdmin);
router.post("/", createUser);
router.put("/:id", VerifyJWT, VerifyAdmin, updateUser)


module.exports = router;