const bookings = require('../models/booking.model');


const getBookings = async (req, res) => {
    try {
        const allBookings = await bookings.find();
        res.status(200).json(allBookings);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
const newBooking = async (req, res) => {
    try {
        const booking = new bookings({
            client: req.body.client,
            email: req.body.email,
            serviceName: req.body.serviceName,
            appointmentDate: req.body.appointmentDate,
            phone: req.body.phone,
            slot: req.body.slot
        });
        await booking.save();
        res.status(201).json(booking);
    } catch (error) {
        res.status(500).send(error.message);
    }

};


module.exports = { getBookings, newBooking }