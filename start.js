// const mongoose = require('mongoose');

// import environmental variables from variables.env file
require('dotenv').config({ path: 'variables.env' });

// Connect to Mongo Atlas Database and handle bad connections
// mongoose.connect(process.env.DATABASE);
// mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
// mongoose.connection.on('error', (err) => {
//   console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
// });

// Import all models
// require('./models/Url')

// Start app!
const app = require('./app');
app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
