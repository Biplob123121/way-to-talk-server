const appointments = require('../models/appointments.model');
const bookings = require('../models/booking.model');

const getAppointments = async (req, res) => {
  try {
    const date = req.query.date;
    const appoints = await appointments.find();
    const alreadyBooked = await bookings.find({appointmentDate: date});

    appoints.forEach(option => {
      const optionBooked = alreadyBooked.filter(book => book.serviceName === option.name);
      const bookedSlots = optionBooked.map(book => book.slot);
      const remainingSlots = option.slots.filter(slot => !bookedSlots.includes(slot))
      option.slots = remainingSlots;
  })
    res.status(200).json(appoints);
  } catch (error) {
    res.status(500).send(error.message);
  }
};


module.exports = { getAppointments }