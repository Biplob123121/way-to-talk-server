const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
    _id: {
        type : String,
        require: true
    },
    name: {
        type : String,
        require: true
    },
    email: {
        type : String,
        require: true
    },
    slot: {
        type : Array,
        require: true
    },
    appointmentName:{
        type : String,
        require: true
    },
    appointmentName:{
        type : String,
        require: true
    },
    appointmentDate:{
        type : Date,
        require: true
    }
})

module.exports = mongoose.model("bookings", bookingSchema);