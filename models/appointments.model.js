const mongoose = require("mongoose");

const appointmentSchema = mongoose.Schema({
    _id: {
        type : String,
        require: true
    },
    name: {
        type : String,
        require: true
    },
    slots: {
        type : Array,
        require: true
    },
})

module.exports = mongoose.model("appointments", appointmentSchema);