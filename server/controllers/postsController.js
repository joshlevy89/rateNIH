function postsController(db, io) {

	this.savePost = function(req,res){
		var user = req.body.user
		var imageUrl = req.body.imageUrl

		var posts = db.collection('posts');

		posts.insert({
			user: user,
			imageUrl: imageUrl
		})
	}

	this.removePost = function(req,res){
		var user = req.body.user
		var imageUrl = req.body.imageUrl

		var posts = db.collection('posts');

		posts.remove({$and:[{user:user},{imageUrl:imageUrl}]});
	}

	this.getPostsByUserId = function(req,res){
		var user = req.body.user
		var posts = db.collection('posts');

		var user_posts = posts.find({user:user}).toArray(
		function(err,docs) {
			var urls = docs.map(doc => doc.imageUrl);

			io.sockets.emit('receive_posts_for_user_id',{
				posts: urls,
				user: user
			})
		});
	}
}

module.exports = postsController