const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config();
require('./config/db');
const users = require('./models/user.model');

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

app.get('/api/jwt', async (req, res) => {
    const email = req.query.email;
    const query = { email: email };
    const user = await users.findOne(query);
    if (user) {
        const token = jwt.sign({ email }, process.env.ACCESS_TOKEN, { expiresIn: '1h' })
        return res.send({ accessToken: token });
    }
    res.status(403).send({ accessToken: '' })
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