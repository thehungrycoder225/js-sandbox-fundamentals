// Back to the two gymnastics teams, There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!

// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgIIST','avgCAGB','avgCEASS, 'avgCONAHS'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "IIST win (30 vs. 13) against CABG"
// 4. Use the 'checkWinner' function to determine the winner for the given Data
// 5. Ignore draws this time
// Test Data
// Data 1: IIST Score: 25, 21, and 25. CABG Score: 21, 25, 13.
// Data 2: IIST Score: 25, 25, and 21. CABG Score: 21, 18, 25.
// Data 3: CEASS Score: 25, 13, and 12. CONAHS Score: 10, 25, 25.
// Data 4: CEASS Score: 18, 25, and 20. CONAHS Score: 25, 13, 25.

// const yearNow = new Date().getFullYear();

// // Compute User Age
// const calcAge = (birthYear) => {
//   age = yearNow - birthYear;
//   return age;
// };

// // Determine if user is Eligible
// function isEligible(birthYear, employee) {
//   let employeeName = employee;
//   let employeeAge = calcAge(birthYear);
//   const retireAge = 65;
//   if (employeeAge >= retireAge) {
//     console.log(`${employeeName} is eligible for Retirement`);
//   } else {
//     calcRetirementYear();
//   }

//   // Calculate the Remaining Remaining Years for Retirement
//   function calcRetirementYear() {
//     const retireYear = retireAge - employeeAge + yearNow;
//     const remainingYears = retireYear - yearNow;
//     return console.log(
//       `${employeeName} is ${employeeAge} years old and will be eligible for retirement in the Year ${retireYear}, there are ${remainingYears} years left`
//     );
//   }
// }

// isEligible();
