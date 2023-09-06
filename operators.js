// types of operators:
// Assignment, comparision, arithmentic, bitwise, logical, bigint, string, conditional (ternary), unary, relational

// Assignment operators
// assigns a value to its left operand based on the value of its right operand.
// types: Assignment, Additional, subtraction, multiplication, division, remainder, exponent & bitwise operators

// assignment
let x = 7;

// addtional assignment
x += 3; // (x = x + 3)

// subtraction assignment
x -= 3; // (x = x - 3)

// multiplication assignment
x *= 3; // (x = x* 3)

// division assignment
x /= 3; // (x = x / 3)

// remainder assignment
x %= 3; // (x = x % 3)

// exponent assignment
x **= 3; // (x = x ** 3)

// comparision
// compares the operands and returns a boolean value
// types: equals, not equals, lessthan equals, greaterthan equals, lessthan , greaterthan, strictly equal, striclty not equal

x = 7;
// equals
x == 7; // true
x == '7'; // true

// not equals
x != 3; // true

// lessthan equals
x <= 3; // false

// greaterthan equals
x >= 3; // true

// lessthan
x < 7; // false

// greaterthan
x > 3; // true

// strictly equal
// checks for the value and the datatype
x === 7; // true
x === '7'; // false

// strictly notequal
x !== 7; // false
x !== '7'; // true

// arithmetic
// takes in numeric values and returns a single numeric value
// types: exponent, increment, decrement, unary plus, unary negation

// exponent (**)
x = x ** 3;

// increment (++)
// increments the value by adding 1 to it
// types: pre-increment, post-increment

x = 7;

// pre-increment
// expression will be incremented first
let a = ++x;
console.log(a);

// post-increment
// expression will be incremented after storing the value
a = x++;
console.log(a);

// decrement (--)
// decrement the value by subtracting 1 from it
// types: pre-decrement, post-decrement

x = 7;

// pre-decrement
// expression will be decremented first
a = --x;

// post-decrement
// expression will be decremented after storing the value
a = x--; // a = x; x = x - 1;

// unary plus
// converts any
