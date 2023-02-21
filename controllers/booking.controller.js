const bookings = require('../models/booking.model');


const getBookings = async (req, res) => {
    try {
        const email = req.query.email;
        const filter = { email }
        const allBookings = await bookings.find(filter);
        res.status(200).json(allBookings);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getSingleBooking = async (req, res) => {
    try {
        const id = req.params.id;
        const filter = { _id: id }
        const booking = await bookings.findOne(filter);
        res.status(200).json(booking);
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
            slot: req.body.slot,
            price: req.body.price
        });
        const bookingQuery = {
            email: req.body.email,
            serviceName: req.body.serviceName,
            appointmentDate: req.body.appointmentDate
        }
        const alreadyBooked = await bookings.find(bookingQuery);
        if (alreadyBooked.length) {
            const msg = `You have a booking on ${booking.appointmentDate}`
            return res.send({ acknowledged: false, msg })
        }

        await booking.save();
        res.status(201).json({ acknowledged: true, booking });
    } catch (error) {
        res.status(500).send(error.message);
    }

};

const updateBooking = async (req, res) => {
    try {
        const booking = await bookings.findOne({ _id: req.params.id });
        booking.paid = 'paid';
        await booking.save();
        res.status(200).json({ modified: true, booking });
    } catch (error) {
        res.status(500).send(error.message);
    }
}


module.exports = { getBookings, newBooking, getSingleBooking, updateBooking }