const appointments = require('../models/appointments.model');

const getAppointments = async (req, res) => {
  try {
    const appoints = await appointments.find();
    res.status(200).json(appoints);
  } catch (error) {
    res.status(500).send(error.message);
  }
};


module.exports = { getAppointments }