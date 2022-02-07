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
