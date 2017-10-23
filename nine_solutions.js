// RegExp Golf
verify(/ca(r|t)/,
       ["my car", "bad cats"],
       ["camper", "high art"]);

verify(/pr?op/,
       ["pop culture", "mad props"],
       ["plop"]);

verify(/ferr(et|y|ari)/,
       ["ferret", "ferry", "ferrari"],
       ["ferrum", "transfer A"]);

verify(/ious\b/,
       ["how delicious", "spacious room"],
       ["ruinous", "consciousness"]);

verify(/\s(\.|,|:|;)/,
       ["bad punctuation ."],
       ["escape the dot"]);

verify(/\b\w{7,}\b/,
       ["hottentottententen"],
       ["no", "hotten totten tenten"]);

verify(/\b[^e ]+\b/,
       ["red platypus", "wobbling nest"],
       ["earth bed", "learning ape"]);


function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == "...") return;
  yes.forEach(function(s) {
    if (!regexp.test(s))
      console.log("Failure to match '" + s + "'");
  });
  no.forEach(function(s) {
    if (regexp.test(s))
      console.log("Unexpected match for '" + s + "'");
  });
}

// Quoting Style
var text = "'I'm the cook,' he said, 'it's my job.'";
// Change this call.
console.log(text.replace(/^'|(\W)'|'(\W)/g, "$1\""));
// → "I'm the cook," he said, "it's my job."

// Numbers Again
/* Matches only JavaScript-style numbers.
	 Must support optional minus or plus sign in front of the number,
	 the decimal dot, and exponent notation - 5e-3 or 1E10, again
	 with an optional sign in front of the exponent.
	 It is not necessary for there to be digits in front of or 
	 after the dot, but number cannot be a dot alone. */
var number = /^([\+-]?(\d+\.?\d*|\.\d+))([Ee][\+-]?\d+)?$/;

// Tests:
["1", "-1", "+15", "1.55", ".5", "5.", "1.3e2", "1E-4",
 "1e+12"].forEach(function(s) {
  if (!number.test(s))
    console.log("Failed to match '" + s + "'");
});
["1a", "+-1", "1.2.3", "1+1", "1e4.5", ".5.", "1f5",
 "."].forEach(function(s) {
  if (number.test(s))
    console.log("Incorrectly accepted '" + s + "'");
});