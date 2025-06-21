const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
    element: String,
    page: String,
    ipAddress: String,
    userAgent: String,
    screen: String,
}, { timestamps: true });

module.exports = mongoose.model('Log', logSchema);
