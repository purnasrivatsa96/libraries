// Load the bcrypt module
var bcrypt = require('bcrypt');
// Generate a salt
var salt = bcrypt.genSaltSync(10);
// Hash the password with the salt
var hash = bcrypt.hashSync("my password", salt);
 
// Finally just store the hash in your DB
// .. code to store in Redis/Mongo/Mysql/Sqlite/Postgres/etc.

var bcrypt = require('bcrypt');
bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash("my password", salt, function(err, hash) {
        // Store hash in your password DB.
    });
});
 
// or
 
bcrypt.hash('bacon', 10, function(err, hash) {
    // Store hash in your password DB.
});

// Load password hash from DB
bcrypt.compare("my password", hash, function(err, res) {
    // res === true
});
bcrypt.compare("not my password", hash, function(err, res) {
    // res === false
});