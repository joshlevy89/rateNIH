var Search = require('../controllers/search.js')

module.exports = function(app, db, io) {
	var search = new Search(db, io)

	app.route('/api/search')
		.post(search.search_friends)
		
}