const mongoose = require("mongoose");

const appointmentSchema = mongoose.Schema({
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