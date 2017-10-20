require("./code/load")("code/mountains.js", "code/chapter/06_object.js");

// A Vector Type
function Vector(x, y) {
	this.x = x;
	this.y = y;
}

Vector.prototype.plus = function(vec) {
	return new Vector(this.x+vec.x, this.y+vec.y);
}

Vector.prototype.minus = function(vec) {
	return new Vector(this.x-vec.x, this.y-vec.y);
}

Object.defineProperty(Vector.prototype, "length", {
	get: function() { 
		return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
	}
})

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// → 5

// Another Cell
function StretchCell(inner, width, height) {
	this.inner = inner;
	this.width = width;
	this.height = height;
}
StretchCell.prototype.minHeight = function() {
	return Math.max(this.height, this.inner.minHeight());
}
StretchCell.prototype.minWidth = function() {
	return Math.max(this.width, this.inner.minWidth());
}
StretchCell.prototype.draw = function(width, height) {
	return this.inner.draw(width, height);
}

var sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log(sc.minWidth());
// → 3
console.log(sc.minHeight());
// → 2
console.log(sc.draw(3, 2));
// → ["abc", "   "]

// Sequence Interface
function logFive(sequence) {
	for (var i=0; i<5; i++) {
		if (!sequence.next()) {
			break;
		}
		console.log(sequence.current());
	}
}

function ArraySeq(array) {
	this.array = array;
	this.pos = -1
}
ArraySeq.prototype.next = function() {
	if (this.pos >= this.array.length-1) {
		return false;
	}
	this.pos++;
	return true;
}
ArraySeq.prototype.current = function() {
	return this.array[this.pos];
}

function RangeSeq(from, to) {
	this.end = to;
	this.pos = from-1;
}
RangeSeq.prototype.next = function() {
	if (this.pos >= this.end) {
		return false;
	}
	this.pos++;
	return true;
}
RangeSeq.prototype.current = function() {
	return this.pos;
}

logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104