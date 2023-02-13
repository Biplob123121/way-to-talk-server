const bookings = require('../models/booking.model');


const getBookings = async (req, res) => {
    try {
        const email = req.query.email;
        const filter = {email}
        const allBookings = await bookings.find(filter);
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
        const bookingQuery = {
            email: req.body.email,
            serviceName: req.body.serviceName,
            appointmentDate: req.body.appointmentDate
        }
        const alreadyBooked = await bookings.find(bookingQuery);
        if (alreadyBooked.length) {
            const msg = `You have a booking on ${booking.appointmentDate}`
            return res.send({acknowledged: false, msg })
        }

        await booking.save();
        res.status(201).json({acknowledged: true, booking});
    } catch (error) {
        res.status(500).send(error.message);
    }

};


module.exports = { getBookings, newBooking }