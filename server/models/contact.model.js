const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,  // corrected
    },
    email: {
        type: String,
        required: true,  // corrected
    },
    phone: {
        type: String,
    },
    message: {
        type: String,
        required: true,  // corrected
    },
}, { timestamps: true });  // corrected

module.exports = mongoose.model('User', userSchema);
