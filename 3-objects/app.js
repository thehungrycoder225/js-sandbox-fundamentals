const c = console.log.bind(this);
const dateNow = new Date().getFullYear();
// Object Construction

const Employee = {
  firstname: 'John',
  lastname: 'Smith',
  age: dateNow - 1966,
  jobtitle: 'programmer',
};

c(Employee);

// Retrieve Data from an Object

// Dot Notation
c(Employee.firstname);
// Brackets Notation
c(Employee['lastname']);
