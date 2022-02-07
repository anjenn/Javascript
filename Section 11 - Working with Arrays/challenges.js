//////////////////////////////////////////////////////////////////
//Challenge 01

/*
const julia = [3, 5, 2, 12, 7];
const julia2 = [9, 16, 6, 8, 3];

const kate = [4, 1, 15, 8, 3];
const kate2 = [10, 5, 6, 1, 4];

//first and the last 2 dogs have cats, not dogs (remove from array)
//don't mutate, shallow copy only.
//create an array with with julia's and kate's data

//for each remaining dog, log to the console whether it's an adult or puppy.

//if greater than or equal to 3, adult, otherwise = puppy

const checkdogs = function (dogsJulia, dogsKate) {
  const array1 = dogsJulia.slice(1, -2);
  //const array2 = dogsKate.slice(1, -2);
  const newArr = array1.concat(dogsKate);
  //console.log(`array 1: ${array1}`);
  //console.log(`array 2: ${array2}`);
  console.log(newArr);
  for (const [i, mov] of newArr.entries()) {
    mov <= 3
      ? console.log(`${i + 1}: age: ${mov} it is a puppy`)
      : console.log(`${i + 1}: age: ${mov} it is an adult`);
  }
  // newArr.forEach(function (item, i, Arr) {
  //   item <= 3 ? console.log(`it is a puppy`) : console.log(`it is an adult`);
  // });
};

checkdogs(julia, kate);
checkdogs(julia2, kate2);
*/

//////////////////////////////////////////////////////////////////
//Challenge 02

const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

//map, filter, reduce

const averageCalc = function (arr) {
  const convertedAges = arr.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
  console.log(convertedAges);
  const filtered = convertedAges.filter((curr) => curr >= 18);
  console.log(filtered);
  const reduced = filtered.reduce(
    (acc, curr, i, arr) => acc + curr / arr.length,
    0
  );
  console.log(reduced);
};

averageCalc(data1);
averageCalc(data2);

//////////////////////////////////////////////////////////////////
//Challenge 03 - chaining

const averageCalcChain = function (arr) {
  const convertedAges = arr
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((curr) => curr >= 18)
    .reduce((acc, curr, i, arr) => acc + curr / arr.length, 0);
  console.log(`chaining done: ${convertedAges}`);
};

averageCalcChain(data1);
averageCalcChain(data2);
