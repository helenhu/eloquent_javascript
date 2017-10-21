// Minimum
// Returns minimum of two input integers a and b. 
function min(a, b) {
	if (a<b)
		return a;
	else
		return b;
}

console.log(min(0, 10));
console.log(min(0, -10));

//Recursion
// Returns true if number is even.
function isEven(number) {
	if (number==0) 
		return true;
	else if (number==1) 
		return false;
	else
		return (number > 0) ? isEven(number-2) : isEven(number+2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

// Bean Counting
// Returns the numbers of 'B's in string.
function countBs(string) {
	return countChar(string, 'B');
}

// Returns the number of character target in string.
function countChar(string, target) {
	var count = 0;
	for (var i = 0; i< string.length; i++) {
		if (string.charAt(i) === target) {
			count++;
		}
	}
	return count;
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));