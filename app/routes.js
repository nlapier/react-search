// Inclue the React library
var React = require('react');
import React from "react";

// Include the Router
// var Router = require('react-router');
// var Route = Router.Route;
// var IndexRoute	= Router.IndexRoute;
import Router, {Route, IndexRoute} from "react-router";

// Reference the high-level components
// var Main = require('../components/Main');
import Main from "../components/Main";

// Export the Routes
module.exports = (

	// / => just Main
	
	// /Child1 => Main and Child1 as props.children

  // /Child1/GrandChild2 => Main which would have Child1 as props.children

	/*High level component is the Main component*/
	<Route path='/' component={Main}>

			<Route path='GrandChild1' component={GrandChild1} />

		<IndexRoute component={Child1} />
		
	</Route>


);