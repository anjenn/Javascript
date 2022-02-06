const menuFO = [...restaurant.starterMenu, ...restaurant.mainMenu];

// with for of loop, there's no need to set up a counter or condition

// declare a variable
// it loops over an entire array
// we can continue & break
// hard to retrieve a counter index
for (const item of menuFO) {
  console.log(item);
}

// Getting index
for (const item of menuFO.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}
// menu.entries: it's a 2 elements array that contains array index and element
// DESTRUCTURING
for (const [i, el] of menuFO.entries()) {
  console.log(`${i + 1}: ${el}`);
}
