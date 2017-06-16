// Load required modules
var express = require('express');
var helmet = require('helmet');

// Create our Express application
var app = express();

// Implement X-Frame: Deny
app.use(helmet.xframe());
//app.use(helmet.xframe('deny')); //Same thing

// Simple endpoint
app.get('/', function(req, res) {
  res.send('Time to secure your application...');
});

// Start the server
app.listen(3000);