let js = "amazing";
// if (js === "amazing") alert("Javascript is Fun!");

// when we want to access the console
// console.log(40 + 8 + 23 - 10);

const inputYear = "1991";
console.log(inputYear);
console.log(inputYear + 15);
console.log(Number(inputYear));
console.log(Number(inputYear) + 15);

//////
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  console.log(applePieces, oranges);
  const juice = `Juice with ${applePieces} apple (pieces) and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
//this line above will only print the number of apples & orange.
console.log(appleJuice);

//POSSIBLE - declaration
const age1 = calcAge1(1990);
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
// const age1 = calcAge1(1990); //We can call a function before/after its definition of after
//when we declare it.

//IMPOSSIBLE - expression
// const age2 = calcAge2(1990); //we can't call this function before initialisation
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1990);
console.log(age1, age2);
