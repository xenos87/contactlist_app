const express = require('express');
const connectDB = require('./config/db');
const path = require('path');


const app = express();

// Connect Database
connectDB();

// Init middleware
app.use(express.static(__dirname, '/dist/build'));

app.get('/', (req, res) => res.sendFile(__dirname, '/dist/index.html'));

// Defines Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));




const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));