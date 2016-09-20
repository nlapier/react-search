// External Dependencies
import React from "react";

//Internal Dependencies
import Search from "./Search.jsx";
import Results from "./Results.jsx";
import Saved from "./Saved.jsx";


const Main = React.createClass({

	// componentDidMount: function(){
	// 	console.log("Main mounted")
	// },

	// Here we render the function
	render: function(){

		return(
			<div>

				<div className="page-header">
					<div className="container text-center">
						<h1>The New York Times Article Scrubber</h1>
						<h1><small>All the news that's fit to React</small></h1>
					</div>
				</div>

				<div className="container mainDiv">
					<div className="row">

						<Search />
							
					</div>
				</div>

			</div>
		)
	}
});

// Export the componen back for use in other files
module.exports = Main;