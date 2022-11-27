'use strict';
const c = console.log.bind(this);
// Adding new elements
const fruits = ['🍈', '🍉', '🍊', '🍋', '🍌'];
// Add an element to the end
fruits.push('🍍', '🍎');
c(fruits);
// Add an element to the beginning
fruits.unshift('🍇');
c(fruits);
// Add an element in the middle
// splice(start, deleteCount, item1, item2, item3, ...)
fruits.splice(2, 0, 'Hello', 'There');
c(fruits);
// Finding elements
// Removing elements
// Splitting arrays
// Combining arrays
