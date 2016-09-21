/*

*/

import React from "react";

const Saved = React.createClass({

	render: function(){
		return(
			<div className="row">
			
				<h2 className="text-center">Saved Articles</h2>

				<div className="col-xs-12"

					<div className="resultArticlesDiv">
						{this.props.saved}
					</div>

				</div>
			</div>
		)
	}
});


module.exports = Saved;

