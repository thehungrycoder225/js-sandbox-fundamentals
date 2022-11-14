const c = console.log.bind(this);
// Loops are made to automate repetitive task

// for loops keeps running while conditions are TRUE
// for (let rep = 1; rep <= 10; rep++) {
//   c(`Lift weight rep ${rep} 🏋️‍♂️`);
// }

// const yearNow = new Date().getFullYear();
// const birthYear = [1990, 1965, 1964, 1954];
// const age = [];

// Looping Arrays, Breaking and Continuing
const avengers = ['Tony', 'Steve', 23, 'Thor', 'Bruce', 'Natasha', true];
// Continue
for (let i = 0; i < avengers.length; i++) {
  if (typeof avengers[i] !== 'string') continue;
  //   c(avengers[i], typeof avengers[i]);
}
// Break
for (let i = 0; i < avengers.length; i++) {
  if (typeof avengers[i] === 'boolean') break;
  //   c(avengers[i], typeof avengers[i]);
}

// Looping Backwards and Loops in Loops
for (count = 10; count > 0; count--) {
  c(`Lift off in ${count}`);
  if (count === 1) {
    c('Lift off 🚀');
  }
}
