const c = console.log.bind(this);

// Working with arrays

const avenger1 = 'Tony';
const avenger2 = 'Steve';
const avenger3 = 'Natasha';
const avenger4 = 'Thor';

// Array
const avengers = ['Tony', 'Steve', 'Natasha', 'Thor'];
const jLeague = new Array('Batman', 'Superman', 'Wonder_Woman', 'Flash');

// Select Array Item
// c(jLeague[0]);

// Calculate Array Length
// c(jLeague.length);

// Array Methods
// c(avengers);
// Push adds new Item / Element in the Array
// avengers.push('Spider_Man');
// c(avengers);

// Unshift Method adds new Item / Element in the Beginning of the Arrays
// avengers.unshift('Wanda');
// c(avengers);

// Splice Method adds / remove items
// avengers.splice(1, 0, 'Hulk');
// c(avengers);

// Pop removes an item in the Array
// avengers.pop();
// c(avengers);

// Shift removes an item in front of the Arrays
// avengers.shift();
// c(avengers);

// IndexOf returns the index of which the Item is located
// c(avengers.indexOf('Natasha'));

// includes checks if the array includes the specified item and returns a boolean data
// c(avengers.includes('Wanda'));
// c(avengers.includes('Tony'));
