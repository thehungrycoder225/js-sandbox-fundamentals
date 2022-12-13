// A programming paradigm centered around objects

// Four pillars of OOP
// 1. Encapsulation
// 2. Abstraction
// 3. Inheritance
// 4. Polymorphism

// Procedural programming
// Program -> Data + Functions

// Object-oriented programming
// Program -> Objects
// Combining related data and functions into objects
// data -> properties
// functions -> methods

// Encapsulation -> Combining related data and functions into objects
// Example
// Procedural programming

let baseSalary = 30000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
  return baseSalary + overtime * rate;
}
// Example of OOP -> More readable and maintainable

let employee = {
  baseSalary: 30000,
  overtime: 10,
  rate: 20,
  getWage: function () {
    return this.baseSalary + this.overtime * this.rate;
  },
};

// The best function is a function that doesn't have parameters - Robert C. Martin aka (Uncle Bob)

// Abstraction -> Hiding the complexity/details and showing only the essentials
// Example
// Hiding the properties and methods that are not essential to the use of the object
