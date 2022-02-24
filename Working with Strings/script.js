const airline = "TAP Air Portugal";
const plane = "A230";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log("B737"[0]);

console.log(airline.length);
console.log("B737".length);

console.log(airline.indexOf("r"));
// to access the last occurence
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("portugal"));
console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") console.log(`you've got the middle seat`);
  else console.log("You are lucky");
};

checkMiddleSeat("118");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

// why methods work on strings?
// when we call a string js bts basically converts it into an object

console.log(typeof new String("jonas"));
// after we use the methods we get a string result
console.log(typeof new String("jonas").slice(1));

// a function that takes a passenger name and returns a correct capitalised one

const someName = "jONas";
const lowerCasedName = someName.toLowerCase();
console.log(lowerCasedName);

const capitaliseNames = function (name) {
  //const str = name;
  const lowered = name.toLowerCase();
  const correct = lowered[0].toUpperCase() + lowered.slice(1);
  console.log(correct);
};

capitaliseNames("catheRine");

// Comparing emails
const email = "hello@jonas.io";
const loginEmail = "Hello@jonas.io";

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim(); // to get rid of empty space
console.log(trimmedEmail);
// Same thing as above
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

console.log(normalizedEmail);
console.log(trimmedEmail);
console.log(email === normalizedEmail);

// Replacing
const priceGB = "288,97€";
const priceUS = priceGB.replace("€", "$").replace(",", ".");
console.log(priceUS);

const announcement =
  "All passengers come to boarding door 23. Boarding door 23!";

console.log(announcement.replace("door", "gate"));
console.log(announcement.replaceAll("door", "gate"));
console.log(announcement.replace(/door/g, "gate"));

// Booleans
const plane2 = "Airbus A230neo";
console.log(plane2.includes("Boeing"));
console.log(plane2.startsWith("A"));
console.log(plane2.endsWith("neo"));

if (plane2.startsWith("Airbus") && plane2.endsWith("neo")) {
  console.log("Part of the NEW Airbus family");
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase(); // essential
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are NOt allowed on board");
  } else {
    console.log("Welcome aboard!");
  }
};
checkBaggage("I have a laptop, some food and a pocket knife");

console.log("a+very+nice+string".split("+")); // splits a string into an array

const [firstName, lastName] = "Jonas Schmedtmann".split(" ");

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];
  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
    //namesUpper.push(n.replace(n[0],n[0].toUpperCase()));
  }
  console.log(`capitalised name: ${namesUpper.join(" ")}`);
};

capitalizeName("jessica ann smity davis");
const passenger = "jessica ann smity davis";

// Padding
const message = "Go to gate 23!";
console.log(message.padStart(25, "+"));
console.log(message.padStart(25, "+").padEnd(30, "+"));
console.log("Jonas".padStart(25, "+"));
// they make a string length of indicated number, empty space filled with a character

const maskCreditCard = function (number) {
  //converting a number to string
  //1. String()
  //2. concatenate with a string
  const str = number + ""; //when one operand is a string
  const lastFour = str.slice(-4);
  return lastFour.padStart(str.length, "*");
};

console.log(maskCreditCard(123493280482395));

// Repeat
const message2 = "Bad weather... All Departures Delayed...";
console.log(message2.repeat(5));

// in line
const planesInline = function (n) {
  console.log(`There are ${n} planes in line ${"*".repeat(n)}`);
};
planesInline(5);
