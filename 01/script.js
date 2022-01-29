let js = "amazing";
// if (js === "amazing") alert("Javascript is Fun!");

// when we want to access the console
// console.log(40 + 8 + 23 - 10);

const inputYear = "1991";
console.log(inputYear);
console.log(inputYear + 15);
console.log(Number(inputYear));
console.log(Number(inputYear) + 15);

//////
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  console.log(applePieces, oranges);
  const juice = `Juice with ${applePieces} apple (pieces) and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
//this line above will only print the number of apples & orange.
console.log(appleJuice);

//POSSIBLE - declaration
const age1 = calcAge1(1990);
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
// const age1 = calcAge1(1990); //We can call a function before/after its definition of after
//when we declare it.

//IMPOSSIBLE - expression
// const age2 = calcAge2(1990); //we can't call this function before initialisation
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1990);
console.log(age1, age2);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} year`;
};
//same as
const yearsUntilRetirement2 = function (birthYear, firstName) {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} year`;
};

/* Arrays */
const friends = ["Michael", "Steven", "Peter"]; //more common
console.log(friends);
const years = new Array(1991, 1984, 2009, 2020);
console.log(friends[friends.length - 1]); //very last elements
firstName = "JENN";
const newArr = [firstName, "Jenn", 200 - 34, "Hi", friends];
console.log(newArr);
newArr.push("New");
console.log(newArr);
const newNew = newArr.push("Hi"); //this is a length
console.log(newNew);
newArr.unshift("first"); //insertion at the beginnning;

/* Objects */
const JennArr = ["JeongHyun", "An", 2022 - 1999, "student"];
const Jenn = {
  firstName: "JeongHyun",
  lastName: "An",
  Age: 2022 - 1999,
  Title: "Student",
};

console.log(Jenn.Age);
console.log(Jenn["firstName"]);

//working with concatenation
const nameKey = "Name";
console.log(Jenn["first" + nameKey]);
console.log(Jenn["last" + nameKey]);
/*
const question = prompt(`Choose between firstName, lastName, Age, Title`);
console.log(Jenn[question]);*/
Jenn.location = "Korea";
Jenn["nickNAme"] = "Jenn";

console.log(Jenn);

//challenge
const jonas = {
  firstName: "Jonas",
  friends: ["Michael", "Peter", "Steven"],
  birthYear: 1980,

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
};
//Jonas has 3 friends, and his best friend is called Michael.
console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);
console.log(jonas.age);

const Jenn2 = {
  firstName: "JeongHyun",
  lastName: "An",
  // Age: 2022 - 1999,
  birthYear: 1999,
  Title: "Student",

  //used attribute + function expression
  calcAge: function () {
    return 2022 - this.birthYear;
  },
  calcAge2: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} ${this.lastName} is ${this.age} years old
    and was born in ${this.birthYear}. She is a ${this.Title} and has ${
      this.license ? "a" : "no"
    } driver's license`;
  },
};
console.log(Jenn2.calcAge());
console.log(Jenn2.calcAge2());
console.log(Jenn2.getSummary());

console.log(`${Jenn2.firstName} ${Jenn2.lastName} is ${Jenn2.age} years old
and was born in ${Jenn2.birthYear}. She is a ${Jenn2.Title} and has ${
  Jenn2.license ? "a" : "no"
} driver's license`);
