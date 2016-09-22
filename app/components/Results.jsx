/*

*/

import React from "react";

const Results = React.createClass({

	render: function(){
		return(
			<div className="row">
			
				<h2 className="text-center">Results</h2>

				<div className="col-xs-12">

					<div className="resultArticlesDiv">
						{this.props.results}
					</div>

				</div>

			</div>
		)
	}
});


module.exports = Results;

