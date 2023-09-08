// Control Statements provide interactivity to the application
// if..else, if..elseif ladder, switch, try/catch/throw

// if..else
// use if clause if the logical condition is TRUE. Use the OPTIONAL else clause if the condition is FALSE
// FALSY values in an if condition: false, 0, '', null, undefined, NaN
let isLoading = 1 + undefined;
if (isLoading) {
  console.log('Loading...');
} else {
  console.log('Application data load complete');
}

// if..elseif ladder
// if there are multiple conditions to be executed, use if..elseif
let cgpa = 4;
console.time('result');
if (cgpa >= 9) {
  console.log('Grade is A+');
} else if (cgpa >= 8) {
  console.log('Grade is A');
} else if (cgpa >= 7) {
  console.log('Grade is B');
} else if (cgpa >= 6) {
  console.log('Grade is C');
} else if (cgpa >= 5) {
  console.log('Grade is D');
} else {
  console.log('Grade is F');
}
console.timeEnd('result');

// switch
// It statement allows a program to evaluate an expression and attempt to match the expression's value to a case label
console.time('switchResult');
switch (cgpa) {
  case 9:
    console.log('Grade is A+');
    break;
  case 8:
    console.log('Grade is A');
    break;
  case 7:
    console.log('Grade is B');
    break;
  case 6:
    console.log('Grade is C');
    break;
  case 5:
    console.log('Grade is D');
    break;
  default:
    console.log('Grade is F');
    break;
}
console.timeEnd('switchResult');

// try/catch/throw or error handling
// throw: Use this keyword to throw an error
// can throw numbers, strings, boolean and objects
// throw 'abc';
// throw 0;
// throw false;
// throw {
//   example() {
//     return "I'm an object";
//   },
// };

// let firstName = '';
// if (firstName.length <= 0) {
//   throw 'Name is required';
// } else {
//   console.log(firstName);
// }

// try/catch
// try is used to hold a set of expressions/statements which may result in an error.
// If an exception occurs, it will be caught inside catch
try {
  let firstName = '';
  if (firstName.length <= 0) {
    throw {
      error: 'Name is required',
    };
  } else {
    console.log(firstName);
  }
} catch (error) {
  // error doesn't have a type. It infers the type thrown from the try block
  console.log(typeof error);
  console.log('An unknown error occured:', error);
}

console.log('Post handled exception');
