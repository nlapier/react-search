// Include Server Dependencies
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
const app = express();

//Require Schemas Here


/*
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('./public'));

// -------------------------------------------------

// MongoDB Configuration configuration (Change this URL to your own DB)
mongoose.connect('mongodb://localhost/nytSeachDB');
var db = mongoose.connection;

db.on('error', function (err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function () {
  console.log('Mongoose connection successful.');
*/
//Add Body Parser Middlewarß
app.use(bodyParser.urlencoded({
  extended: false
}));

//Use public directory
app.use(express.static('public'));

//Mongoose - Configure and connect to the database 
mongoose.connect('mongodb://localhost/nytSeachDB');
const db = mongoose.connection;

//Mongoose - show errors
db.on("error", function(error){
	console.log("Mongoose error: ", error);
});

//Mongoose - success message upon database connection
db.once("open", function(){
	console.log("The 'goose is go!")
});


});


// Listener
const port = process.env.PORT || 3000; 

app.listen(port, function() {
  console.log("App listening on PORT: " + port);
});