// load dependencies
require("./code/load")("code/ancestry.js", "code/chapter/05_higher_order.js", "code/intro.js");

// Flattening
// Given an array of arrays, returns a one-dimensional array
// of all elements.
var arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays.reduce(function(a, b) {
	return a.concat(b);
}));
// → [1, 2, 3, 4, 5, 6]

// Mother-Child Age Difference
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

// Returns average age difference between children
// and their mothers.
var ageDifference = [];
ancestry.forEach(function(person) {
	if (byName[person.mother] == undefined) {
		return;
	}
	ageDifference.push(person.born-byName[person.mother].born);
})
console.log(average(ageDifference));
// → 31.2

// Historical Life Expectany
// Assign a person to a century --> Math.ceil(person.died / 100)
// Compute and output the average age of the people in the ancestry data set per century
var byCentury = {};
ancestry.forEach(function(person) {
	var century = Math.ceil(person.died / 100);
	if (byCentury[century] == undefined) {
		byCentury[century] = [];
	}
	byCentury[century].push(person);
})

for (century in byCentury) {
	var ages = byCentury[century].map(function(person) {
		return person.died - person.born;
	})
	console.log(century + ": " + average(ages));
}
// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94

// Every and Then Some
// Returns true of every element in array passes test.
function every(array, test) {
	for (var i=0; i<array.length; i++) {
		if (!test(array[i])) {
			return false;
		}
	}
	return true;
}

// Returns true if some elements in array pass test.
function some(array, test) {
	for (var i=0; i<array.length; i++) {
		if (test(array[i])) {
			return true;
		}
	}
	return false;
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false