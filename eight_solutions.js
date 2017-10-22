// Retry

function MultiplicatorUnitFailure() {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.5)
    return a * b;
  else
    throw new MultiplicatorUnitFailure();
}

// Keeps calling primitiveMultiply until a call succeeds,
// returning the result.
function reliableMultiply(a, b) {
  for (;;) {
  	try {
  		return primitiveMultiply(a, b);
  	} catch (e) {
  	}
  }
}

console.log(reliableMultiply(8, 8));
// → 64

// The Locked Box

// Box with a lock. Inside is an array, but you can get at it only
// when the box is unlocked.
var box = {
  locked: true,
  unlock: function() { this.locked = false; },
  lock: function() { this.locked = true;  },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
  }
};

// Takes a function value as argument, unlocks the box, runs the 
// function, and ensures that the box is locked again before returning,
// regardless of whether the argument function returned normally
// or threw an excepiton.
function withBoxUnlocked(body) {
	var wasLocked = box.locked;
  box.unlock();
  try {
  	body();
  } catch (e) {
  }
  box.lock();
  if (!wasLocked)
  	box.unlock();
}

withBoxUnlocked(function() {
  box.content.push("gold piece");
});

try {
  withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised:", e);
}
console.log(box.locked);
// → true