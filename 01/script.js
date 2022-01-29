let js = "amazing";
// if (js === "amazing") alert("Javascript is Fun!");

// when we want to access the console
// console.log(40 + 8 + 23 - 10);

// challenge 01
const markM = 78;
const markH = 1.69;
const johnM = 92;
const johnH = 1.95;
const markBMI = markM / markH ** 2;
const johnBMI = johnM / johnH ** 2;
let markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI);
console.log(markHigherBMI);

//challenge 02
if (markBMI > johnBMI) {
  const bmiText = "Mark's" + " BMI is higher than" + " John's" + "!";
  console.log(bmiText);
} else {
  const bmiText = "John's" + " BMI is higher than" + " Mark's" + "!";
  console.log(bmiText);
}
if (markBMI > johnBMI) {
  const bmiText = `Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`;
  console.log(bmiText);
} else {
  const bmiText = `John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})`;
  console.log(bmiText);
}
