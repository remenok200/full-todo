const express = require('express');
const cors = require('cors')
const router = require('./routes');
const { errorHandler } = require('./errorHandler');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/', router);

app.use(errorHandler);

module.exports = app;