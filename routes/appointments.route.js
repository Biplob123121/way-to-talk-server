const express = require('express');
const router = express.Router();

const { getAppointments } = require('../controllers/appointment.controller');


router.get("/", getAppointments);

module.exports = router;