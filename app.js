const express = require('express'); 
const authRoutes = require('./routes/ auth-routes');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');

const app = express(); 

//const authRoutes = require('./routes/auth-routes');

//set up views
app.set('view engine', 'ejs');    

// connected mongodb
mongoose.connect(keys.mongodb.dbURI, ()=>{
    console.log('connect to mongodb');
});


// import use router
app.use ('/auth', authRoutes);

app.get('/', (req, res) =>{
    res.render('home');
});
    


var PORT = process.env.PORT || 3000; 
app.listen(PORT || 3000, function(req, res) {
    console.log('listen to port: ' + 3000);
});