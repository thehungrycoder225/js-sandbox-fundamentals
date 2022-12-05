'use strict';
const c = console.log.bind(this);

// Function Declaration
function walk() {
  // do something
}

// Function Expression
const run = function () {
  // do something
};

// Named Function Expression
const sprint = function sprint() {
  // do something
};

// Arrow Function
const jump = () => {
  // do something
};

// Hoisting -> JavaScript moves all function declarations to the top of the file
// fly(); // this works because of hoisting

// function fly() {
//   c('flying');

// Arguments -> an array-like object
function sum(a, b) {
  return a + b; // this is a return statement
}

function sumAll() {
  let total = 0;
  for (let value of arguments) total += value; // arguments is an array-like object
  return total;
}

// Rest Operator -> ES6
// ... -> rest operator

// Default Parameters -> ES6

// Old Way
// function interest(principal, rate, years) {
//   rate = rate || 3.5;
//   years = years || 5;
//   return ((principal * rate) / 100) * years;
// }

// ES6
// function interest(principal, rate = 3.5, years = 5) {} // default parameters
// Best practice is to put default parameters at the end

// Getters and Setters -> ES6

let personObj = {
  firstName: 'John',
  lastName: 'Doe',
};

// getter -> access properties
// setter -> change (mutate) them

// Error Handling -> try, catch, throw, finally -> ES6
// Defensive Programming -> try to prevent errors from happening

// Local vs Global Scope

// Let vs Var

// var -> function scope -> global scope -> window object
// avoid using var -> use let and const
// let -> block scope -> global scope

// This Keyword
// this -> refers to the object that is executing the current function
// method -> obj -> this -> obj
// function -> global (window, global) -> this -> global (window, global)

//  Changing the value of this

// Solution 1 -> self = this
// const image = {
//   title: 'My Image',
//   tags: ['tag1', 'tag2'],
//   showTags() {
//     const self = this;
//     this.tags.forEach(function (tag) {
//       console.log(self.title, tag);
//     }, this);
//   },
// };

// Solution 2 -> bind Method
//   title: 'My Image',
//   tags: ['tag1', 'tag2'],
//   showTags() {
//     this.tags.forEach(
//       function (tag) {
//         console.log(this.title, tag);
//       }.bind(this)
//     );
//   },
// };

// Solution 3 -> ES6 Arrow Function
// const image = {
//   title: 'My Image',
//   tags: ['tag1', 'tag2'],
//   showTags() {
//     this.tags.forEach((tag) => {
//       c(this.title, tag);
//     });
//   },
// };

// Call, Apply, and Bind -> ES6
// call -> calls a function with a given this value and arguments provided individually
// apply -> calls a function with a given this value and arguments provided as an array
// bind -> returns a new function, allowing you to pass in a this array and any number of arguments
