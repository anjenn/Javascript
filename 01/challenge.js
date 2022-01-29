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

//challenge 03
// const dolphins1 = 96;
const dolphins1 = 150;
const dolphins2 = 108;
const dolphins3 = 89;
const dolphinsAvg = (dolphins1 + dolphins2 + dolphins3) / 3;
const koalas1 = 88;
const koalas2 = 91;
const koalas3 = 110;
const koalasAvg = (koalas1 + koalas2 + koalas3) / 3;
console.log(`Score of Dolphins': ${dolphinsAvg}
Score of Koalas': ${koalasAvg}`);
if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
  console.log(`Dolphins (${dolphinsAvg}) won`);
} else if (dolphinsAvg == koalasAvg && dolphinsAvg >= 100) {
  console.log(`Draw`);
} else if (dolphinsAvg < koalasAvg && koalasAvg >= 100) {
  console.log(`Koalas (${koalasAvg}) won`);
} else {
  console.log(`Invalid inputs`);
}

//challenge 04
const day = prompt("What day is it today?");

switch (day) {
  case "monday":
  case "Monday":
    alert(`Yes it's ${day}!`);
    break;
  case "tuesday":
  case "Tuesday":
    alert(`Yes it's ${day}!`);
    break;
  case "wednesday":
  case "Wednesday":
    alert(`Yes it's ${day}!`);
    break;
  case "thursday":
  case "Thursday":
    alert(`Yes it's ${day}!`);
    break;
  case "friday":
  case "Friday":
    alert(`Yes it's ${day}!`);
    break;
  case "saturday":
  case "Saturday":
    alert(`Yes it's ${day}!`);
    break;
  case "Sunday":
  case "sunday":
    alert(`Yes it's ${day}!`);
    break;
  default:
    alert("I don't understand");
}

if (day == "monday" || day == "Monday") {
  console.log(`Yay it's ${day}`);
} else if (day == "tuesday" || day == "Tuesday") {
  console.log(`Yay it's ${day}`);
} else if (day == "wednesday" || day == "Wenesday") {
  onsole.log(`Yay it's ${day}`);
} else {
  console.log(`I only like the first 3 days :>`);
}

//challenge 05
const bill = 275;
let tip;
const str = `The bill was  ${bill},
The tip was ${(tip = 50 <= bill && bill <= 300 ? bill * 0.15 : bill * 0.2)} 
The total value was ${tip + bill}`;
console.log(str);

const bill2 = 40;
let tip2;
const str2 = `The bill was  ${bill2},
The tip was ${(tip2 =
  50 <= bill2 && bill2 <= 300 ? bill2 * 0.15 : bill2 * 0.2)} 
The total value was ${tip2 + bill2}`;
console.log(str2);
