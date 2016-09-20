// Include the Main React Dependencies
// import React from "react";
import React from "react";
import ReactDOM from "react-dom";
const reactRouter = require("react-router");
const hashHistory = reactRouter.hashHistory;
const Router = reactRouter.Router;

// Grabs the Routes
import routes from "./routes";
import Main from "./components/Main.jsx"

// Renders the contents according to the route page. 
ReactDOM.render(
	<Router history = {hashHistory}>{routes}</Router>,
	document.getElementById('app')
)