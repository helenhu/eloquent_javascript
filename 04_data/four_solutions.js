// The Sum of a Range
/* Returns an array of integers in the range start to end.
	 Optional third argument is set as number to increment/
	 decrement numbers in the sequence by. */
function range(start, end) {
	var step = arguments[2] == undefined ? 1 : arguments[2];
	res = [];
	if (step < 0 || start > end) {
		if (step > 0) {
			step = -1;
		}
		while (start >= end) {
			res.push(start);
			start+=step;
		}
	}
	else {
		while (start <= end) {
			res.push(start);
			start+=step;
		}
	}
	return res;
}

// Returns sum of all integers in nums.
function sum(nums) {
	var total = 0;
	for (var i=0; i<nums.length; i++) {
		total += nums[i];
	}
	return total;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
console.log(range(5, 2));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55

// Reversing an Array
// Returns array, reversed.
function reverseArray(array) {
	var res = []
	for (var i=0; i<array.length; i++) {
		res.unshift(array[i]);
	}
	return res;
}

// Reverses array in place.
function reverseArrayInPlace(array) {
	var start = 0;
	var end = array.length-1;
	while (start < end) {
		var temp = array[start];
		array[start] = array[end];
		array[end] = temp;
		start++;
		end--;
	}
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

// A List
// Returns linked list representation of an array of integers.
function arrayToList(array) {
	var list = null;
	for (var i=array.length-1; i>=0; i--) {
		list = {value: array[i], rest: list}
	}
	return list;
}

// Returns array representation of linked list.
function listToArray(list) {
	var array = []
	for (var node=list; node; node = node.rest) {
		array.push(node.value);
	}
	return array;
}

// Adds element to the head of list.
function prepend(element, list) {
	return {value: element, rest: list};
}

// Inserts the value at place num in list, 
// returns undefined if place num does not exist.
function nth(list, num) {
	for (var i=0; list != null; i++) {
		if (i===num) {
			return list.value;
		}
		list = list.rest;
	}
	return undefined;
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

// Deep Comparison
// Returns true if values and structure of objects
// a and b are equal.
function deepEqual(a, b) {
	var res = true;
	if (typeof a == "object" && typeof a != null 
			&& typeof b == "object" && typeof b != null) {
		for (var prop in a) {
			res = res && deepEqual(a[prop], b[prop]);
		}
	}
	else {
		return a === b;
	}
	return res;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true