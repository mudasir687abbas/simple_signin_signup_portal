const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
// Load env vars
dotenv.config();

const app = express();

// Middleware
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/user', require('./routes/user'));

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'MERN Auth Portal API is running' });
});

if(connectDB()){
  console.log('Connected to MongoDB');
}
// Connect to MongoDB
app.listen(process.env.PORT || 5000, async () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`)
});