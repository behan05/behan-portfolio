const express = require('express');
const app = express();
require('dotenv').config();
const DBConnect = require('./config/dbConnect');
const contactRoutes = require('./routes/contactRoutes'); // route file

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', contactRoutes);

// DB Connection
DBConnect();

// Start server
app.listen(process.env.PORT, () =>
    console.log(`Server started on http://localhost:${process.env.PORT}`)
);
