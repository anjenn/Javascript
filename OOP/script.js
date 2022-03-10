"use strict";

//////////////////////////////////////////////////////////////
/////// CONSTRUCTOR FUNCTIONs
//////////////////////////////////////////////////////////////

const Person = function (firstName, birthYear) {
  console.log(this); // it should log an empty object into the console.
  // whatever we add to this empty object is going to be returned
  // that returned object: what we try to build here

  // adding properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // adding methods (DON'T CREATE METHODS DIRECTLY IN HERE - we don't want copies of one function over and over)
};

const jonas = new Person("Jonas", 1991);
const matilda = new Person("Matilda", 1995);
console.log(jonas);

// what happens when we call a 'new' operator?
// 1. New {} empty object is created
// 2. function is called, this = empty object
// 3. {} linked to prototype
// 4. function automatically returns {}

// checking whether sth is an instance of sth
console.log(jonas instanceof Person);

//prototypes
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
}; // we do this instead of writing it inside the constructor

jonas.calcAge();

console.log(jonas.__proto__ === Person.prototype);
// in Person.prototype, this prototype is not a prototype of the 'Person',
// but, it is what's supposed to be used as a prototype of its future instances.

Person.prototype.species = "Homo Sapiens";
console.log(jonas.species, matilda.species); //they are not directly inheried (species) we do see sapience in the prototypes, but not in the objects

console.log(jonas.hasOwnProperty("firstName"));
console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__); // object.prototype (top level of prototype chain)
console.log(jonas.__proto__.__proto__.__proto__); // null
console.log(Person.prototype.constructor); // points back at the person

console.dir(Person.prototype.constructor); // when we want to inspect the fnction

const arr = [3, 6, 4, 5, 9, 3];
console.log(arr.__proto__);

//console.dir(h1);

//////////////////////////////////////////////////////////////
/////// ES6 CLASSES
//////////////////////////////////////////////////////////////

// class expression
// const PersonCl = class {}

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // function declaration
  // methods we declare here will actually be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  get age() {
    return 2037 - this.birthYear;
  }
  set fullName(name) {
    console.log(name);
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name`);
  }
  get fullName() {
    return this._fullName;
  }
}

const jessica = new PersonCl("Jessica", 1996);
console.log(jessica.__proto__ === PersonCl.prototype);

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};
jessica.greet();
console.log(jessica.age);
console.log(jessica.fullName);

//////////////////////////////////////////////////////////////
/////// SETTERS & GETTERS (Properties)
//////////////////////////////////////////////////////////////

const account = {
  owner: "Jonas",
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest); // we can simply use this as a property

//////////////////////////////////////////////////////////////
/////// Object.create()
//////////////////////////////////////////////////////////////

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  //to make it more programmatic, similar to constructor.
  init(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
// we pass into the function what we want to be a prototype of the new object
// steven.name = "Steven";
// steven.birthYear = "2002";
steven.calcAge();

//////////////////////////////////////////////////////////////
/////// CLASS/PROTOTYPE INHERITANCE (constructors)
//////////////////////////////////////////////////////////////

const Person2 = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person2.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person2.call(this, firstName, birthYear); // we need .call to be able to use this keywrd
  this.course = course;
};

// !!!! We can't make the prototype of Person & Student prototypes to be the same (as we in default have all instances use the same prototypes)
// Linking prototypes
Student.prototype = Object.create(Person2.prototype);
// mike(object, __proto__ : Student.prototype) // lower level
// Student(constructor, __proto__: Person.prototype) // middle
// Person(constructor, __proto__: Object.prototype) // one below top-level
// Object(__proto__: null) // topmost level

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student("Mike", 1997, "Math");
console.log(mike);

//////////////////////////////////////////////////////////////
/////// CLASS/PROTOTYPE INHERITANCE (ES6)
//////////////////////////////////////////////////////////////

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first
    super(fullName, birthYear); // deconstructor of parent class, responsible for creating 'this' keyword
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
}
const martha = new StudentCl("Martha Jones", 2012, "Cmputer Science");
martha.introduce();

//////////////////////////////////////////////////////////////
/////// CLASS/PROTOTYPE INHERITANCE (Object.create)
//////////////////////////////////////////////////////////////

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  //to make it more programmatic, similar to constructor.
  init(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

// linkage
const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear, course);
  // we can use this because studentProto inherits personProto
};
const jay = Object.create(StudentProto); // PersonProto is a parent prototype of jay

// Inheritance
// jay(StudentProto) -> StudentProto (PersonProto) -> PersonProto
