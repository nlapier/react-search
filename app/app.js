// Include the Main React Dependencies
import React from "react";
import ReactDOM from "react-dom";

// Grab the proeprty associated with the Router
// var Router = require('react-router').Router
import React , {Router} from "react-router";

// Grabs the Routes
import routes "./config/routes";

// Renders the contents according to the route page. 
ReactDOM.render(
	<Router>{routes}</Router>,
	document.getElementById('app')
)