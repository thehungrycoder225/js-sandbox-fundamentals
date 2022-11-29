'use strict';
const c = console.log.bind(this);
// Emptying an array
let numbers = [1, 2, 3, 4, 5, 6, 1, 8, 9, 10];
let another = numbers;
// Solutions
// 1. Assign an empty array -> not recommended for multiple references
// numbers = [];

// 2. Set the length to 0 -> recommended for cleaner code
// numbers.length = 0;

// 3. Use .splice() -> recommended for large arrays
// numbers.splice(0, numbers.length);

// 4. Use .pop() -> recommended for large arrays
// while (numbers.length > 0) {
//   numbers.pop();
// }

// Combining and Slicing Arrays
const first = [1, 2, 3]; // Primitive Type
const second = [4, 5, 6];
const firstOjb = [{ id: 1 }]; // Reference Type

// Combining arrays
// .concat() -> returns a new array

// Splitting arrays
// .slice() -> returns a new array

// Spread Operator -> ES6 a more elegant way to combine / copy arrays

// Iterating arrays
const fruits = ['🍈', '🍉', '🍊', '🍋', '🍌'];

// Solution 1 - for of loop

// Solution 2 - forEach()

// Joining arrays
// .join()  -> when you see a ? in a method it means it's optional

// Example
const message = 'how to learn javascript in a day';
// const parts = message.split(' ');
// c(parts);
// const combined = parts.join('+'); // this method is used to create a slug for a url
// c(combined);
// slug -> a string that is used to identify a web page in a search engine
// https://www.google.com/search?q=how+to+learn+javascript+in+a+day

// Sorting arrays
const randomNumbers = [3, 2, 5, 1, 4];
const users = [
  { id: 1, name: 'Jane Doe' },
  { id: 2, name: 'Dave Smith' },
];

// Solution 1 - .sort() -> useful when array is made of strings or numbers

// Solution 2 - .reverse()

// Solution 3 - .sort() with a compare function -> useful when array is made of objects

// Testing the elements of an array
const numberSet = [1, 2, -3, 4, 10];
// .every() -> returns true if all elements in the array pass the test

// .some() -> returns true if at least one element in the array pass the test

// Filtering an array
// .filter() -> returns a new array

// Mapping an array
// .map() -> returns a new array

// Chaining

// Reducing an array
// .reduce() -> returns a single value (number, string, object, array) -> used to calculate a sum of an array

// using for of loop

// using .reduce()
