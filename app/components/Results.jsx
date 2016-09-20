/*

*/

import React from "react";

const Results = React.createClass({

	render: function(){
		return(
			<div>
				<h2 className="text-center">Results</h2>

				<div className="resultArticlesDiv">
					{this.props.results}
				</div>

			</div>
		)
	}
});


module.exports = Results;

