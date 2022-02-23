console.log(`//////////////////`);
console.log(`Looping Objects`);

const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are opne on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property values
const values = Object.values(openingHours);
console.log(values);

// Property entries
const entries = Object.entries(openingHours);
// we don't call entries() directly on an object as we did for array
console.log(entries); // objects transferred to arrays

for (const x of entries) {
  //console.log(`On ${key}`);
}
//since we know the second value in the array is an object, we can immediately destructure it
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
