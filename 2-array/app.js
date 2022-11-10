const c = console.log.bind(this);

// Working with arrays

const avenger1 = 'Tony';
const avenger2 = 'Steve';
const avenger3 = 'Natasha';
const avenger4 = 'Thor';

// Array
const avengers = ['Tony', 'Steve', 'Natasha', 'Thor'];
const jLeague = new Array('Batman', 'Superman', 'Wonderwoman', 'Flash');

// Select Array Item
c(avengers[0]);

// Calculate Array Length
c(jLeague.length);

// Array Methods
// Push adds new Item / Element in the Array
avengers.push('Spiderman');
c(avengers);

// Unshift Method adds new Item / Element in the Beginning of the Arrays
avengers.unshift('Parker');
c(avengers);

// Pop removes an item in the Array
avengers.pop();
c(avengers);

// Shift removes an item in front of the Arrays
avengers.shift();
c(avengers);

// IndexOf returns the index of which the Item is located
avengers.indexOf('');

// includes checks if the array includes the specified item and returns a boolean data
c(avengers.includes('item'));
c(avengers.includes('Tony'));
