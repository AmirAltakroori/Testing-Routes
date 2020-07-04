const path = require('path');
const cors = require('cors');
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const PORT = process.env.PORT || 8080;

// load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

// Body pareser
app.use(express.json());

// Enable cors
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'ejs')

app.use('/api/v1/stores', require('./routes/stores'));

app.listen(PORT, () =>
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);