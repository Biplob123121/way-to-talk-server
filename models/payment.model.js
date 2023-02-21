const mongoose = require("mongoose");

const paymentSchema = mongoose.Schema({
    transactionId: {
        type : String,
        require: true
    },
    email: {
        type : String,
        require: true
    },
    price:{
        type : String,
        require: true
    }
})

module.exports = mongoose.model("payments", paymentSchema);