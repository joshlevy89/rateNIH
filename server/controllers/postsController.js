function postsController(db, io) {
	this.savePost = function(req,res){
		var userId = req.body.userId
		var imageUrl = req.body.imageUrl

		var posts = db.collection('posts');

		posts.insert({
			userId: userId,
			imageUrl: imageUrl
		})
	}
}

module.exports = postsController