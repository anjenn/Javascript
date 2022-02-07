// function that takes an array of numbers
// calculates the sum

const array = [1, 3, 10];

const addNumbers = (array) => {
  let sum1 = 0;
  for (item of array) {
    sum1 += item;
  }
  console.log(sum1);
  return sum1;
};

const addNumbers2 = function (array) {
  let sum2 = 0;
  array.forEach((item) => {
    sum2 += item;
  });
  console.log(sum2);
  return sum2;
};

function addNumbers3(array) {
  let sum3 = 0;
  for (let i = 0; i < array.length; i++) {
    sum3 += array[i];
  }
  console.log(sum3);
  return sum3;
}

addNumbers(array);
addNumbers2(array);
addNumbers3(array);

console.log(array.reduce((acc, curr) => (acc += curr), 0));
