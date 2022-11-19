const c = console.log.bind(this);

// BMI = mass/height ** 2 = mass/(height * height) (mass in kg and height in meter)

const person1 = {
  firstName: 'Tony ',
  lastName: 'Stark',
  mass: 78,
  height: 1.69,
  BMI: null,
  calcBMI: function () {
    this.BMI = Math.trunc(this.mass / this.height ** 2);
    return this.BMI;
  },
};

const person2 = {
  firstName: 'Bruce ',
  lastName: 'Wayne',
  mass: 92,
  height: 1.95,
  BMI: null,
  calcBMI: function () {
    this.BMI = Math.trunc(this.mass / this.height ** 2);
    return this.BMI;
  },
};

person1.calcBMI();
person2.calcBMI();

if (person1.BMI > person2.BMI) {
  c(
    `${person1.firstName}'s BMI ${person1.BMI} is higher than ${person2.firstName}'s ${person2.BMI}`
  );
} else {
  c(
    `${person2.firstName}'s BMI ${person2.BMI} is higher than ${person1.firstName}'s ${person1.BMI}`
  );
}
