/*

*/

import React from "react";

const Saved = React.createClass({

	render: function(){
		return(
			<div>
				<h2 className="text-center">Saved Articles</h2>

				<div className="resultArticlesDiv">
					{this.props.saved}
				</div>

			</div>
		)
	}
});


module.exports = Saved;

