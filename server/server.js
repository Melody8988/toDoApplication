const express = require('express');
const app = express();
const port = process.env.PORT || 5005;
const bodyParser = require('body-parser');

//Source mongo location
const mongoose = require('mongoose');
const databaseURL = 'mongodb://localhost:27017/hadar';

//Connect to mongo
mongoose.connect(databaseURL);

//Connected to mongodb?
mongoose.connection.on('connected', () => {
    console.log('connected to mongo database!');
});
mongoose.connection.on('error', (err) =>{
    console.log('error connecting to mongo database', err);
});

//Body-parser needed for Angular 
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Serve up static files
app.use(express.static('server/public'));












app.listen(port, function(){
    console.log('server running on port:', port);
});
    