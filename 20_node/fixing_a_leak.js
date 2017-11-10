// Changes a url to a pathname. This fixes a security issue the original
// function in the eloquent javascript exercise.
function urlToPath(url) {
  var path = require("url").parse(url).pathname;
  var result = "." + decodeURIComponent(path);
  for (;;) {
  	var regex = /(\/|\\)\.\.(\/|\\|$)/;
  	var simplified = result.replace(regex, "/");
  	if (simplified == result) return result;
  	result = simplified;
  }
}