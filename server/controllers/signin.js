function signin(db,io) {
	this.attempt_signin = function(req,res) {
		res.json({
				message: 'signin_successful'
		})
	}
}

module.exports = signin