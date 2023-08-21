// two types: primitive, reference
// primitive: number, string, boolean, undefined, Symbol

// number => Any integer whole or floating point
const a = 0; // whole number
let b = 1.1; // floating point
const c = b; // when you copy a primitive type into another variable, then whole vaule will be copied
b = 2.1;

console.log(c, b);

// string => Usually value between single or double quotes
const name = 'Pramod';

// boolean => has only two values true or false
const isTrue = true;
const isFalse = false;

// undefined => any unassigned variable in JS is undefined
const x = undefined;

// Symbol => always returns a unique value
const y = Symbol('x');
const z = Symbol('x');
console.log(y === z); // false

// reference: Objects
let o = {
  name: 'Pramod',
  designation: 'S.Con',
}; // object will be stored in heap memory, address of the object is stored in the variable
let j = o; // when you copy a reference type, only the reference will be copied
console.log(typeof o); // typeof is used to get the datatype of a variable
console.log(j);
o.designation = 'Specialist';
console.log(j);
