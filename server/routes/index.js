var Search = require('../controllers/search.js')
var Add = require('../controllers/add.js')
var Remove = require('../controllers/remove.js')
var Signin = require('../controllers/signin.js')
var Authenticate = require('../controllers/authenticate.js');
var PostsController = require('../controllers/postsController.js')



module.exports = function(app, db, io) {
	var search = new Search(db, io)
	var add = new Add(db, io)
	var remove = new Remove(db,io)
	var signin = new Signin(db,io)
	var authenticate = new Authenticate(app)
	var postsController = new PostsController(db,io)

	app.route('/api/search')
		.post(search.search_yelp)

	app.route('/api/add')
		.post(add.add_attendee)

	app.route('/api/remove')
		.post(remove.remove_attendee)

	app.route('/api/signin')
		.post(signin.attempt_signin)

	app.route('/auth/twitter')
		.get(authenticate.twitter_authentication) 

	app.route('/auth/twitter/return')
		.get(authenticate.twitter_callback)

	app.route('/api/postsController')
		.post(postsController.savePost)

}