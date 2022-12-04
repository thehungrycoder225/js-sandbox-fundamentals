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

// Getters and Setters -> ES6

// Try and Catch -> ES6

// Local vs Global Scope

// Let vs Var

// This Keyword

//  Changing the value of this
