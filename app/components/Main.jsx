// Include React 
// var React = require('react');
import React from "react";

const Main = React.createClass({

	// componentDidMount: function(){
	// 	console.log("Main mounted")
	// },

	// Here we render the function
	render: function(){

		return(

			<div className="container">

				<h1>TEST</h1>

			</div>
		)
	}
});

// Export the componen back for use in other files
module.exports = Main;