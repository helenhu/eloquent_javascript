// Makes several requests to eloquentjavascript.net/author, asking
// for different types of content by passing different Accept headers.
var http = require("http");
var headers = ["text/plain", "text/html", "application/json"];

function readStreamAsString(stream, callback) {
	var content = "";
	stream.on("data", function(chunk) {
		content += chunk.toString();
	});
	stream.on("end", function() {
		callback(null, content);
	});
	stream.on("error", function(error) {
		callback(error);
	});
}

headers.forEach(function(header) {
	var request = http.request({
		hostname: "eloquentjavascript.net",
		path: "/author",
		method: "GET",
		headers: {Accept: header}
	}, function(response) {
		if (response.statusCode != 200) {
			console.error("Request failed: " + response.statusMessage);
			return;
		}
		readStreamAsString(response, function(error, content) {
			if (error) throw error;
			console.log(header + ":\n" + content + "\n");
		});
	});
	request.end();
});
