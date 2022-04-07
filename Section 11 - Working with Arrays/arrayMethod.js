/////////////////////////////////////////////////

// SLICE METHOD (doesn't mutate)
let arr = ["a", "b", "c", "d", "e"];

console.log(arr.slice(2)); // new array starts from arr[2]
console.log(arr.slice(2, 4)); // array between 2 to 4
console.log(arr.slice(-2)); // only last 2 elements taken
console.log(arr.slice(-1)); // only last 1 element taken
console.log(arr.slice(1, -2)); // starts from arr[1], everything except the last 2

console.log(arr.slice()); //making a shallow copy
console.log(...arr); //string (spread operator)

// SPLICE METHOD (does mutate)
arr = ["a", "b", "c", "d", "e"];
console.log(arr.splice(-1)); // only the last element
//difference!!
console.log(arr.splice(1, 2)); // starting from arr[i], deleting consecutive 2
console.log(arr);

// REVERSE METHOD (does mutate)
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());
console.log;

// CONCAT METHOD (doesn't mutate)
const letter = arr.concat(arr2);
console.log(letter);
console.log(...arr, ...arr2);

// JOIN METHOD
console.log(letter.join(" - ")); // string with a specified separator

/////////////////////////////////////////////////

// AT METHOD (also works on strings)
const arr3 = [23, 11, 61];
console.log(arr3[0]);
console.log(arr3.at(0));

console.log(arr3[arr3.length - 1]);
console.log(arr3.slice);
console.log(arr3.at(0)); // same as arr[0]
//its usage (when extracting the last element for example):
console.log(arr3[arr.length - 1]);
console.log(arr3.slice(-1)[0]);
console.log(arr3.at(-1)); //at() method allows us to count from the last element

////TIP
//Use arr[0] to get the first, arr.at(-1) to get the last element

// LOOP
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
} // just like any for loop, loop over the whole array

// FOREACH (break and continue doesn't work)
console.log(`-----FOR EACH-----`);
// parameters' naming could differ, but the order must be the same
movements.forEach(function (mov, i, array) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
}); // for each iteration/element, we give this instruction
// forEach passes into the current element index & entire array (these can show in the parameter list)

///////// MAPS
const currencies = new Map([
  [`USD`, `United States Dollar`], //each element is an map entry
  [`EUR`, `Euro`], // key, value pair
  [`GBP`, `Pound Sterling`],
]);

//key: first element of the array used to search for the tuple,
//value: content
//map (as a parameter): we send the entire map that we work on
//current value, current key, and entire array.
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// SET
const currenciesUnique = new Set([`USD`, `GBP`, `USD`, `EUR`]);
console.log(currenciesUnique);
