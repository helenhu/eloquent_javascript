// Create a MKCOL method for the file server defined in this chapter of
// eloquent javascript. This method should create a directory.

var methods = Object.create(null);
var fs = require("fs");

function respondErrorOrNothing(respond) {
	return function(error) {
		if (error)
			response(500, error.toString());
		else
			respond(204);
	}
}

methods.MKCOL = function(path, respond) {
	fs.stat(path, function(error, stats) {
		if (error && error.code == "ENOENT")
			fs.mkdir(path, respondErrorOrNothing(respond));
		else if (error)
			respond(500, error.toString());
		else if (stats.isDirectory())
			respond(204);
		else
			respond(400, "File exists");
	});
};