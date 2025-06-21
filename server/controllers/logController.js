const Log = require('../models/logs.model');

const logEvent = async (req, res) => {
    try {
        const { element, page, screen } = req.body;

        const log = new Log({
            element,
            page,
            screen,
            ipAddress: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
            userAgent: req.headers['user-agent'],
        });

        await log.save();
        res.status(201).json({ success: true });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

module.exports = logEvent;
