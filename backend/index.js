require("dotenv").config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/portfolio', require('./routes/portfolioRoutes'));

app.listen(3001, () => {
    console.log('Server is running');


})