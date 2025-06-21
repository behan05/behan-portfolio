const express = require('express');
const router = express.Router();
const logEvent = require('../controllers/logController');

router.post('/logs', logEvent);

module.exports = router;
