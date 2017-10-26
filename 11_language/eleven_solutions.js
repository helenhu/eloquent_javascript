// load dependencies
require("./code/load")("code/chapter/11_language.js");

// Arrays
// Constructs array containing argument values
topEnv["array"] = function() {
	var array = [];
	var args = Array.prototype.slice.call(arguments, 0);
	args.forEach(function(value) {
		array.push(value);
	});
	return array;
};

// length(array) returns array's length
topEnv["length"] = function(array) {
	return array.length;
};

// element(array, n) fetches nth element from array
topEnv["element"] = function(array, n) {
	return array[n];
};

run("do(define(sum, fun(array,",
    "     do(define(i, 0),",
    "        define(sum, 0),",
    "        while(<(i, length(array)),",
    "          do(define(sum, +(sum, element(array, i))),",
    "             define(i, +(i, 1)))),",
    "        sum))),",
    "   print(sum(array(1, 2, 3))))");
// → 6

// Comments
// Rewrite skipSpace function to also skip comments, which begin with 
// a hash sign (#)

console.log(parse("# hello\nx"));
// → {type: "word", name: "x"}

console.log(parse("a # one\n   # two\n()"));
// → {type: "apply",
//    operator: {type: "word", name: "a"},
//    args: []}

// Fixing Scope
// Gives a variable a new value, updating the variable in
// an outerscope if it doesn't already exist in the
// inner scope. If variable is not defined at all, throw
// a ReferenceError.
specialForms["set"] = function(args, env) {
  if (args.length != 2 || args[0].type != "word")
    throw new SyntaxError("Bad use of set");
  var value = evaluate(args[1], env);
  var outer = Object.getPrototypeOf(env);
  var name = args[0].name;
  if (Object.prototype.hasOwnProperty.call(env, name)) {
  	env[name] = value;
  }
  else if (Object.prototype.hasOwnProperty.call(outer, name)) {
  	outer[name] = value;
  }
  else {
  	throw new ReferenceError("Variable does not exist");
  }
  return value;
};

run("do(define(x, 4),",
    "   define(setx, fun(val, set(x, val))),",
    "   setx(50),",
    "   print(x))");
// → 50
run("set(quux, true)");
// → Some kind of ReferenceError