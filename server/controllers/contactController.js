const User = require('../models/contact.model');

const handleContactForm = async (req, res) => {
    try {
        const { fullName, email, phone, subject, message } = req.body;
        if (!fullName || !email || !subject || !message) {
            return res.status(404).json({ error: 'Full name, email, and message are required' });
        }
        const newContact = new User({
            fullName,
            email,
            phone,
            subject,
            message
        });
        await newContact.save();
        return res.status(200).json({ success: true, message: 'Message received!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = { handleContactForm };
