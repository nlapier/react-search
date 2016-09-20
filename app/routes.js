/*

		<Route path='GrandChild1' component={GrandChild1} />

	<IndexRoute component={Child1} />
*/


// Inclue the React library
// var React = require('react');
import React from "react";

// Include the Router
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute	= Router.IndexRoute;
// import Router, {Route, IndexRoute} from "react-router";

// Reference the high-level components
// var Main = require('../components/Main');
import Main from "./components/Main.jsx";

// Export the Routes
module.exports = (

	<Route path='/' component={Main}>

		
	</Route>


);