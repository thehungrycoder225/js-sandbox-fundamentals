const yearNow = new Date().getFullYear();

// Compute User Age
const calcAge = (birthYear) => {
  age = yearNow - birthYear;
  return age;
};

// Determine if user is Eligible
function isEligible(birthYear, employee) {
  let employeeName = employee;
  let employeeAge = calcAge(birthYear);
  const retireAge = 65;
  if (employeeAge >= retireAge) {
    console.log(`${employeeName} is eligible for Retirement`);
  } else {
    calcRetirementYear();
  }

  // Calculate the Remaining Remaining Years for Retirement
  function calcRetirementYear() {
    const retireYear = retireAge - employeeAge + yearNow;
    const remainingYears = retireYear - yearNow;
    return console.log(
      `${employeeName} is ${employeeAge} years old and will be eligible for retirement in the Year ${retireYear}, there are ${remainingYears} years left`
    );
  }
}

isEligible();
