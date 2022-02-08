//////////////////////////////////////////////////////////////
// Sets
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
// Maps
//////////////////////////////////////////////////////////////

// data are stored in key-value pairs
