/*

*/

import React from "react";

const Search = React.createClass({

	render: function(){
		return(
			<div>
				<h2 className="text-center">Search New Articles</h2>

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
			</div>
		)
	}
});


module.exports = Search;

