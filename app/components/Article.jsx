/*

*/

import React from "react";

const Article = React.createClass({

	render: function(){
		return(
			<div>
				<h3 className="text-center articleHeadline">{this.props.headling}</h3>

				<h5 className="articleDate">{this.props.date}</h5>

				<a href={this.props.url} className="articleURL"></a>

				<button type="submit" class="btn btn-default">{this.props.action}</button>

			</div>
		)
	}
});


module.exports = Article;

