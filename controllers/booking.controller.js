const bookings = require('../models/booking.model');


const getBookings = async (req, res) => {
   res.status(200).json({
    message : "all bookings.."
   })
  };
const newBooking = async (req, res) => {
   res.status(200).json({
    message : "all bookings.."
   })
  };
  
  
  module.exports = { getBookings, newBooking }