/*

*/

import React from "react";

var Search = React.createClass({

	render: function(){
		return(
			<form>

				<div>
					<label for="searchTerm">Search Term</label>
					<input type="text" className="form-control" id="searchTerm" />
				</div>

				<div>
					<label for="startYear">Start Year</label>
					<input type="text" className="form-control" id="startYear" />
				</div>

				<div>
					<label for="endYear">End Year</label>
					<input type="text" className="form-control" id="endYear" />
				</div>

				<button type="submit" className="btn btn-default">Search</button>

			</form>
		)
	}
});


module.exports = Search;

