const express = require('express');
const router = express.Router();
const { handleContactForm } = require('../controllers/contactController');

// POST /contact
router.post('/contact', handleContactForm);

module.exports = router;
