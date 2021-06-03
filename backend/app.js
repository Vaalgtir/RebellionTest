const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const userRoute = require('./routes/user');
const dataRoute = require('./routes/data');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

app.use('/api/auth', userRoute);
app.use('/api/data', dataRoute);

module.exports = app;