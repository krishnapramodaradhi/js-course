// Functions are a set of statements that can be executed anywhere any number of times
// Defining functions
// two ways - using function keyword, funciton expression
example(); // this will execute as the function will be hoisted
function example() {
  console.log('This is a function');
}

// function expression
//exp(); // this will result in an error as the variable is not declared yet
const exp = function () {
  console.log('Funciton expression');
};

// function scope
// variables defined inside a funciton cannot be used outside wherein the variables defined in the global scope
// can be used within the function
function scope() {
  let a;
  console.log(a);
}

// console.log(a); // results in an error as 'a' is not defined

// clousures
// the nested function will have full access to all the variables, arguments and functions of the parent function
function A(name) {
  const example = 'This is an example';
  function C() {
    console.log('C', name);
  }
  function B(age) {
    console.log(name, example);
  }
}

// arguments & parameters
// parameters - provide input to a function
// two types - default, rest
// default parameters - finite number of parameters
function add(a, b = 0 /* default value */) {
  return a + b;
}

console.log(add(-1));

// rest parameters (...)
// when the number of parameters are unknown
function sum(...args) {
  return args.reduce((prev, curr) => prev + curr);
}
console.log(sum(34, 56, 81, 92)); // arguments - are values passed while calling a function

// arrow functions
const arrow = () => {
  console.log('This is arrow function');
};
arrow();
