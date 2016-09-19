// Include Server Dependencies
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

//Require Schemas Here

// Create Instance of Express
const app = express();
const port = process.env.PORT || 3000; // Sets an initial port. We'll use this later in our listener

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
});


// Listener
app.listen(port, function() {
  console.log("App listening on PORT: " + port);
});