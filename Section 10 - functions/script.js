////////////////////////////////////////////
//Function returning other function
////////////////////////////////////////////

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey"); //at this stage we don't have 'name'

//the above now works as a function
greeterHey("Jonnas"); //these work thanks to closure
greeterHey("Steven");

greet(`Hello`)(`Jonas`); //this also works

// Using arrow function (arrow function returning another arrow function)
const greet2 = (greeting2) => {
  (name) => console.log(`${greeting2} ${name}`);
};

////////////////////////////////////////////
//Call methods
////////////////////////////////////////////
const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],

  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
lufthansa.book(239, "Jenn An");
lufthansa.book(635, "John Smith");
console.log(lufthansa);

const eurowing = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
  //must have same attribute names
};

const book = lufthansa.book;

book(23, "Sarah Williams");

book.call(eurowing);
//first keyword: what we want 'this' pointer to point to.

book.call(lufthansa, 239, "Mary Cooper");
console.log(lufthansa);

const swiss = {
  airline: "Swiss Air Lines",
  iatacode: "LX",
  bookings: [],
};

book.call(swiss, 583, "Mary Cooper");
console.log(swiss);

////////////////////////////////////////////
//Apply methods
////////////////////////////////////////////

//works the same as call method, but one difference is that apply does not receive a list of arguments
// after 'this' keyword.

const flightData = [583, "George Cooper"];
book.apply(swiss, flightData);
console.log(swiss);
//apply method is not used as often anymore
// because we have something simpler:

book.call(swiss, ...flightData);
