'use strict';
const c = console.log.bind(this);
// Object Literals
const imageObj = {
  title: 'Cute Cat',
  width: 100,
  height: 100,
  // Methods
  renderOrientation() {
    this.orientation = this.width > this.height ? 'landscape' : 'portrait';
  },
};

// Factories
const createImage = (title, width, height) => {
  return {
    title,
    width,
    height,
    renderOrientation() {
      this.orientation = this.width > this.height ? 'landscape' : 'portrait';
    },
  };
};

// Constructors
const Image = (title, width, height) => {
  this.title = title;
  this.width = width;
  this.height = height;
  this.renderOrientation = () => {
    this.width > this.height ? 'landscape' : 'portrait';
  };
};

// Value vs Reference Types
let x = 10;
let y = x;
x = 20;
c(x, y); // 20, 10

let a = { value: 10 };
let b = a;
a.value = 20;
c(a, b); // {value: 20}, {value: 20}

// Adding or Removing Properties

// Enumerating Properties

// Abstraction

// Private Properties and Methods

// getters and setters
