function search(db, io) {

this.search_friends = function(req,res) {
	
		var searchStr = req.body.searchStr
		console.log("HI THERE!")
		console.log(db);

		var posts = db.collection('posts');

		posts.find({"user": {$regex : ".*" + searchStr +".*"}}).toArray(function(err,docs){
			if (docs.length === 0) {
				res.json({
					message: 'NO_RESULTS_RECEIVED'
				})
			return
			}
			else {
				var users = docs.map(doc => doc.user);
				res.json({
					users: users,
					message: 'RESULTS_RECEIVED'
				});
			}
		})
}
}

module.exports = search
