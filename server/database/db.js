function db() {

	var db_singleton = null;

	this.dbConnect = function(cb) {
	  if (this.db_singleton) {
		cb(err,db)
		return
	  }
	  else {
	  	var isProduction = process.env.NODE_ENV === 'production';
	  	if (isProduction) {
	  		 var url = 'mongodb://joshlevy89:Born=1989@ds019856.mlab.com:19856/heroku_vnxth4c0';
	    }
	    else {
			var url = 'mongodb://localhost:27017/pinclone';
		}
		var mongo = require('mongodb').MongoClient;
		mongo.connect(url, function(err,db) {
			db_singleton = db;
			cb(err, db);
			return
		})
	  }
	}

}

module.exports = db;