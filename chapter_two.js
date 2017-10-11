// Looping a triangle
var hash = '#'
for (var i = 0; i < 7; i++) {
	console.log(hash)
	hash += '#';
}

// FizzBuzz
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