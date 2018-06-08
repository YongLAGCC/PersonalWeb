var mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 

// set Schema
var userSchema = new Schema ({
    username: String, 
    googleId: String,
    
});

//set module
const User = mongoose.model('user', userSchema);

module.exports = User;