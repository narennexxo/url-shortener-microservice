// Import all models
require('../../models/Url')

// import environmental variables from variables.env file
require('dotenv').config({ path: 'variables.env' });

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
