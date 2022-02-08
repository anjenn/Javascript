//////////////////////////////////////////////////////////////
// SETS
//////////////////////////////////////////////////////////////

//Collection of unique values
/* Can never have duplicates
can store mixed data types*/

// create by writing 'new Set()'
// pass in an iterable (ex. array, string)
const orderSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pizza",
  "Pasta",
]);

console.log(orderSet); //all the duplicates are gone

console.log(new Set("Jonas"));
console.log(orderSet.size);
console.log(orderSet.has("Pizza"));
orderSet.add("Garlic Bread");
orderSet.add("Garlic Bread");
orderSet.delete("Risotto");
console.log(orderSet);
// WE CAN'T RETRIEVE A SET VALUE VIA INDEX
// ORDER DOESN'T MATTER (use array in this case)
orderSet.clear();
console.log(orderSet);

// WE CAN USE A LOOP HOWEVER

for (const order of orderSet) console.log(order);

// Example
const staff = ["waiter", "chief", "waiter", "manager", "chief", "waiter"];
const staffunique = new Set(staff); // creating a new set
const sttafunique2 = [...new Set(staff)];
console.log(
  new Set(["waiter", "chief", "waiter", "manager", "chief", "waiter"]).size
);

// Seeing how many unique characters there are
console.log(new Set("jonasschemedtmann").size);

//////////////////////////////////////////////////////////////
// MAPS
//////////////////////////////////////////////////////////////

// data are stored in key-value pairs
/* unlike how keys are strings in objects,
   in maps it coudld be anything
*/

const rest = new Map(); // it's easy to create an empty one first and then to fill it up
rest.set("name", "Classico Italiano"); // set is similar to add
rest.set(1, "Firenze, Italy");
rest.set(2, "Lisbon, Portugal");
// set method returns the updated map -> allowsing us to use a chain method

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian, Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open!")
  .set(false, "We are closed");

console.log(rest.get("name"));
console.log(rest.get(true));

const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));
// not very readable though

console.log(rest.has("categories"));
rest.delete(2);
rest.set([1, 2], "test"); // setting array as a key
console.log(rest);
rest.clear();
console.log(rest.size);

console.log(rest.get([1, 2]));
// this [1, 2] is not the same array as what we passed into set()
// (IN THE HEAP)
// what we pass in as a key must be exactly the same one every time
// to make it work:

const keyArr = [1, 2];
rest.set(arr, "Test");
console.log(rest.get(arr));

// Even DOM element
rest.set(document.querySelector("h1"), "Heading");

//////////////////////////////////////////////////////////////
// MAPS ITERATION
//////////////////////////////////////////////////////////////

const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "Javascript"],
  ["correct", 3],
  [true, "Correct!"],
  [false, "Wrong!"],
]); // we can use set() method when we keep adding element,
// but declaring all at once also works
