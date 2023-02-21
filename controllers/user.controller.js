const users = require('../models/user.model');

const createUser = async (req, res) => {
    try {
        const newUser = new users({
            name: req.body.name,
            email: req.body.email
        })
        await newUser.save();
        res.status(201).json({ acknowledged: true, newUser });
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const getUser = async (req, res) => {
    try {
        const allUser = await users.find();
        res.status(200).json(allUser)
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const getAdmin = async (req, res) => {
    try {
        const email = req.params.email;
        const admin = await users.findOne({ email: email })
        res.send({ isAdmin: admin?.role === 'admin' });

    } catch (error) {
        res.status(500).send(error.message);
    }
}

const updateUser = async (req, res) => {
    try {
        const user = await users.findOne({ _id: req.params.id });
        user.role = 'admin';
        await user.save();
        res.status(200).json({ modified: true, user });
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = { createUser, getUser, updateUser, getAdmin };