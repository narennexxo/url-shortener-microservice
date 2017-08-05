const mongoose = require('mongoose');

// Import all models
require('../../models/Url')

// import environmental variables from variables.env file
require('dotenv').config({
    path: 'variables.env'
});

const app = require('../../app');
const assert = require('assert');
const superagent = require('superagent');

describe('server', function() {
    var server;

    beforeEach(function() {
        server = app.listen(process.env.PORT || 7777);
    });

    afterEach(function() {
        server.close();
    });

    it('prints out "Hey! It works!" when user goes to /', function(done) {
        superagent.get(process.env.APP_URL, function(error, res) {
            assert.ifError(error);
            assert.equal(res.status, 200);
            assert.equal(res.text, "Hey! It works!");
            done();
        });
    });
});
/*
describe('Get Url - Error', function() {
    var server;

    beforeEach(function() {
        // Connect to Mongo Atlas Database and handle an bad connections
        mongoose.connect(process.env.DATABASE);
        mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
        mongoose.connection.on('error', (err) => {
            console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
        });
        server = app.listen(process.env.PORT || 7777);
    });

    afterEach(function() {
        server.close();
    });

    it('Returns error json when user tries to get url not in db', function(done) {
        url = process.env.APP_URL + 'ABC';
        superagent.get(url, function(error, res) {
            console.log('iiii');
            assert.ifError(error);
            assert.equal(res.status, 200);
            assert.equal(res.text, {
                "error": "This url is not on the database."
            });
            done();
        });
    });
});*/
