'use strict';
const c = console.log.bind(this);

// Example

// let radius = 1;
// let x = 1;
// let y = 1;

// A purpose of an object is to group related variables and functions together
// Object Oriented Programming (OOP)
// Objects Key-Value Pairs
// const circle = {
//   radius: null, // Objects Key-Value Pairs
//   location: {
//     x: null,
//     y: null,
//   },
//   // if a function is a part of an object, it is called a method
//   drawCircle: function () {
//     c('draw');
//   },
// };

// Factory Function
// const circle1 = {
//   radius: null,
//   location: {
//     x: null,
//     y: null,
//   },
//   drawCircle: function () {
//     c('draw');
//   },
// };

// const circle2 = {
//   radius: null,
//   location: {
//     x: null,
//     y: null,
//   },
//   drawCircle: function () {
//     c('draw');
//   },
// };

// Factory Function
// Example
// - Naming Convention = Camel Notation / Camel Case
//  - camelCase
function createCircle(radius) {
  return {
    radius,
    draw() {
      c('draw');
    },
  };
}

const myCircle = createCircle(1);

// Constructor Function

// Example
// - Naming Convention = Pascal Notation / Pascal Case
//  - PascalCase

function Circle(radius) {
  this.radius = radius; // this = empty object
  this.draw = function () {
    c('draw');
  };
}

const circleOne = new Circle(1); // new = empty object
// new creates an empty object
// const x = {}; // behind the scenes

// Dynamic Nature of Objects
const circle = {
  radius: 1,
};

// ADDING / REMOVING PROPERTIES
// - Adding
circle.color = 'yellow';
circle.draw = function () {};
// - Removing
delete circle.color;
delete circle.draw;

// Constructor Property
// - Every object has a property called constructor and that references the function that was used to construct or create that object
// - In JavaScript, functions are objects
// - Every object has a constructor property
// - The value of the constructor property is a reference to the function that was used to construct or create that object
// - The constructor property can be used to determine which function was used to construct or create an object
// - The constructor property can be used to create new objects of the same type
// - The constructor property can be used to determine the type of an object

// Built-in Objects
// new String(); // '', "", ``
// new Boolean(); // true, false
// new Number(); // 1, 2, 3, 4, 5
// new Object(); // {}, new Object
// new Array(); // [], new Array
// new Function(); // function () {}, new Function
// new Date(); // new Date
// new RegExp(); // new RegExp
// new Error(); // new Error

// Factory Function
function createCharacter(name, level) {
  return {
    name,
    level,
  };
}

// Constructor Function
function Character(name, level) {
  this.name = name;
  this.level = level;
}

// const Character = new Function(
//   'name, level',
//   `
// this.name = name;
// this.level = level;
// `
// );
// Character.call({}, 'Twilight', 1);

// Enumerating Properties of an Object

// Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.

// Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop.

// Cloning an Object

const createBox = (width, height) => {
  return {
    width,
    height,
  };
};

const box1 = createBox(1, 2);
const box2 = {};

// Old Way
// for (let key in box1) {
//   box2[key] = box1[key];
// }

// c(box2, box1);

// Modern Way
// const box3 = Object.assign(
//   {
//     color: 'red',
//   },
//   box1
// );

// Spread Operator
// const box4 = { ...box1 };
