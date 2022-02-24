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
const priceUS = priceGB.replace("€", "$");
console.log(priceUS);
