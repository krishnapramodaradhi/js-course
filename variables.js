// scope (This defines the scope of the variable)
// two types: global, function or local

// global => variables defined outside functions and code blocks
const a = 1;

// function or local => variables defined inside a function, same names can be used
function b() {
  const a = 2; // highest preferance
  console.log('From function scope', a);
}
b();

for (let a = 0; a < 3; a++) {
  console.log(a);
}
