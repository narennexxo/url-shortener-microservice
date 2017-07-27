const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const path = require('path');
const routes = require('./routes/index');

// create Express app
const app = express();

app.use('/', routes);

module.exports = app;
