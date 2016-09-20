/*

		<Route path='GrandChild1' component={GrandChild1} />

	<IndexRoute component={Child1} />
*/

import React from "react";

// React Router
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute	= Router.IndexRoute;
// import Router, {Route, IndexRoute} from "react-router";

// Import Components
// var Main = require('../components/Main');
import Main from "./components/Main.jsx";
import Search from "./components/Search.jsx";

// Export the Routes
module.exports = (

	<Route path='/' component={Main}>

		<Route path='/' component={Search} />
	
	</Route>

);