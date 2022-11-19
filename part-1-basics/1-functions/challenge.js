const c = console.log.bind(this);
const yearNow = new Date().getFullYear();

// Calculate User Age
calculateAge = (birthYear) => {
  return yearNow - birthYear;
};

// Calculate Retirement Age
calculateRetirement = (birthYear, userName) => {
  const age = calculateAge(birthYear);
  const retirement = 65 - age;
  const yearRemaining = yearNow + retirement;
  if (age < 65) {
    c(
      `${userName} is ${age} years old. and will be eligible for retirement in the Year ${yearRemaining} in ${retirement} years.`
    );
  } else {
    c(`${userName} has already retired`);
  }
};

calculateRetirement(1966, 'John');
