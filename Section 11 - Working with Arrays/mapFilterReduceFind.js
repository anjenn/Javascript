// they all take (item, index, array) as parameters.

/* Map: loops over an array, and for each iteration,
applies a specified function
*** the function applies to ALL element in the array
*/

/* Filter: filters an entire array and finds out an element that satisfies the certain condition
 */

/* Reduce: boils (reduces) all array elements down to one single value
(ex. adding all elements together) */
const movements1 = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;
/*const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
});*/

const movementsUSD = movements1.map((mov) => mov * eurToUsd);
//does the same thing as
const movementsUSDfor = [];
for (const mov of movements1) movementsUSDfor.push(mov * eurToUsd);
console.log(movements1);
console.log(movementsUSD);
console.log(movementsUSDfor);

const movementsDescriptions = movements1.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);
// DIFFERENCE between foreach & map -> forEach loops over the array one element by one, and perform individual action for each element (side effect)
// meanwhile, map() performs one action for all, and put them all at once into a new array

/////////////////////////////////////////////////////////////
// FILTER

const deposits = movements1.filter(function (mov) {
  return mov > 0;
});

const depositsFor = [];
for (const mov of movements1) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = movements1.filter((mov) => mov < 0);

//// FIND (it retrieves only one element)
const found = movements.find((mov) => mov < 0);
console.log(`the first negative value`);
//useful when we search through array of objects

//// FINDINDEX (returns the index of the found element)

/////////////////////////////////////////////////////////////
// REDUCE

console.log(movements1);

// accumulator is like a snowball
const balance = movements1.reduce((acc, curr, i, arr) => acc + curr, 35); //this  '35' is the initial value of the accumulator
console.log(balance);

let balance2 = 0; // initial accumulator value
for (const mov of movements1) balance2 += mov;
console.log(balance2);
// we need an external variable when we use a for loop

// GETTING THE MAX VALUE
const max = movements1.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements1[0]);
console.log(max);

/////////////////////////////////////////////////////////////
// CHAINING METHODS

const totalDeopsitUSD = movements1
  .filter((mov) => mov > 0)
  .map((mov) => mov * eurToUsd)
  // .map((mov, i, arr) => {
  //   console.log(arr);
  //   return mov * eurToUsd;
  // })
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDeopsitUSD);

// to check the behavior of one part of the chain
// we can check it out via current element of the next part

/////////////////////////////////////////////////////////////
// OPTIONAL CHAINING
// applies only when the previous chain exists

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    // we can put any expression in the square brackets below
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}
//same as
console.log(restaurant.openingHours.mon?.open);
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of days) {
  console.log(day);
  restaurant.openingHours[day];
  //we can't do openingHours.day because it's not an actual attribute
  // Now, when we do
  // openingHours.mon // this dynamically comes from the days array

  // since we only have thu, fri, sat defined, we set default value for the rest
  // const open = restaurant.opesningHours[day]?.open || 'Closed';
  const open = restaurant.openingHours[day]?.open ?? "Closed";
  /* because the system thinks 0 as an opening hour set for saturday is 
  a falsey value, we use '??' the Nullish Coalescing operator instead
 */
  console.log(`On ${day}, we open at ${open}`);
}

//Methods
console.log(restaurant.order?.(0, 1) ?? `Method does not exist`);
console.log(restaurant.orderRisotto?.(0, 1) ?? `Method does not exist`);

//Arrays
const users = [{ name: "Jonas", email: "hello@jonas.io" }];

console.log(users[0]?.name ?? "User Array empty");
