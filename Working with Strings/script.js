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
