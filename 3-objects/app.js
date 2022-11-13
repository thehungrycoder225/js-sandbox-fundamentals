const c = console.log.bind(this);
const dateNow = new Date().getFullYear();
// Object Construction

const avenger = {
  firstname: 'Tony',
  lastname: 'Stark',
  age: dateNow - 1966,
  role: 'Ironman',
  address: '',
  status: '',
  isActive: true,
};

c(avenger);

// Retrieve Data from an Object
// Dot Notation
c(avenger.firstname);
// Brackets Notation
c(avenger['lastname']);

// Mutate Object data
avenger.address = 'Manhattan';
avenger['status'] = 'active';
c(avenger);

// Object Methods
const jLeague = {
  firstname: 'Bruce',
  lastname: 'Wayne',
  age: null,
  birthYear: 1900,
  role: 'Batman',
  address: '',
  status: '',
  isActive: true,
  calcAge: function () {
    this.age = dateNow - this.birthYear;
    return;
  },
};

jLeague.calcAge();
c(jLeague);
