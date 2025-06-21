const express = require('express');
const app = express();
require('dotenv').config();
const DBConnect = require('./config/dbConnect');
const contactRoutes = require('./routes/contactRoutes');
const logRoutes = require('./routes/logRoutes')
const cors = require('cors');

const corsOptions = {
    origin: ['http://localhost:5173', 'https://your-frontend-domain.com'], // allowlist
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
};

app.use(cors())

// Middleware
app.use(express.json());
app.use('/api', logRoutes);

// Routes
app.use('/api/users', contactRoutes);

// DB Connection
DBConnect();

// Start server
app.listen(process.env.PORT, () =>
    console.log(`Server started on ${process.env.PORT}`)
);
