const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
    client: {
        type : String,
        require: true
    },
    email: {
        type : String,
        require: true
    },
    slot: {
        type : String,
        require: true
    },
    phone:{
        type : String,
        require: true
    },
    serviceName:{
        type : String,
        require: true
    },
    appointmentDate:{
        type : String,
        require: true
    }
})

module.exports = mongoose.model("bookings", bookingSchema);