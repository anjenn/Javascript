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
//Call and apply methods
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
  name: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;

book(23, "Sarah Williams");
