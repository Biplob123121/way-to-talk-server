const users = require('../models/user.model');

const VerifyAdmin = async (req, res, next) => {
    const decodedEmail = req.decoded.email;
    const admin = await users.findOne({ email: decodedEmail })
    if (admin.role !== 'admin') {
        return res.status(403).json({ acknowledged: false, message: "Forbidden access" });
    }

    next()
}

module.exports = VerifyAdmin;