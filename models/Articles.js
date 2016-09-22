//Require mongoose and create a schema class with it
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
	title: {
		type: String,
		required: true
	},

	date: {
		type: Date,
	}

	link: {
		type: String,
		required: true
	}

});

var Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;