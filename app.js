const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('./config/db');

const appointmentRouter = require('./routes/appointments.route');
const bookingRouter = require('./routes/bookings.route');
const userRouter = require('./routes/users.route');

const app = express();


// middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/appointments", appointmentRouter);
app.use("/api/bookings", bookingRouter);
app.use("/api/users", userRouter);



app.get("/", (req, res) => {
    res.sendFile(__dirname + '/./views/index.html')
});


// Route not found
app.use((req, res, next) =>{
    res.status(404).json({
        message : "Route not Found..."
    })
})

// server error
app.use((err, req, res, next) =>{
    res.status(500).json({
        message : "Something is wrong"
    })
})



module.exports = app;