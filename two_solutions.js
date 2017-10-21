// Looping a triangle
/* Returns
	 x
	 xx
	 xxx
	 xxxx
	 xxxxx
	 xxxxxx
	 xxxxxxx */
var hash = '#'
for (var i = 0; i < 7; i++) {
	console.log(hash)
	hash += '#';
}

// FizzBuzz
/* Outputs to console integers from 1 to 100.
	 If number is multiple of 3, "Fizz" it output instead.
	 If number is multiple of 5, "Buzz" is output instead.
	 If number is multiple of both 3 and 5, "FizzBuzz" is output. */
for (var i = 1; i <= 100; i++) {
	var res = ''
	if (i%3 === 0) {
		res += "Fizz";
	}
	if (i%5 === 0) {
		res += "Buzz";
	}
	if (res === '')
		console.log(i);
	else
		console.log(res);
}

// Chess Board
/* Returns string representation of square chessboard with
	 size 8. */
var size = 8;
var res = "";
for (var i=0; i<size; i++) {
	for (var j=0; j<size; j++) {
		if ((i+j)%2==0) {
			res += " ";
		}
		else {
			res += "#";
		}
	}
	res += "\n";
}
console.log(res);