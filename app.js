const express = require('express');
const { unset } = require('lodash');
const testRoutes = require('./src/routes/test.routes');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(testRoutes);

module.exports = app;