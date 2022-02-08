/////////////////////////////////////////////////////////////
// Add two sums
/*
Input:  [1, 3, 5, 7,], 8
Output: [1, 2]

Input:  [-3, 3, 5, 7,], 0
Output: [0, 1]
*/

var twoSum = function (nums, target) {
  let n = 0;
  let first = 0;
  let second = 0;
  if (target == 0) {
    first = nums.find((num) => num == 0);
    for (let k = first + 1; k < nums.length; k++) {
      if (nums[k] == 0) second = k;
    }
    return [first, second];
  } else {
    for (let i = 0; i < nums.length; i++) {
      if (target === 0) {
        n = 0;
      } else {
        n = target - nums[i];
      }
      for (let j = i + 1; j < nums.length; j++) {
        if (n == nums[j]) {
          first = i;
          second = j;
          break;
        }
      }
    }
  }
  return [first, second];
};

/////////////////////////////////////////////////////////////
// Add two sums
// works only for arrays, not
// adding two reverse arrays as if they were
var addTwoNumbers = function (l1, l2) {
  const converted1 = Array.from(l1);
  const converted2 = Array.from(l2);
  const array1 = converted1.reverse();
  const array2 = converted2.reverse();
  //console.log(array1, array2);
  arr1 = array1.join("");
  arr2 = array2.join("");
  let sum;
  sum = Number(arr1) + Number(arr2);
  const newSum = Array.from(`${sum}`);
  console.log(newSum.reverse());
  return newSum.reverse();
};

addTwoNumbers([1, 2, 3], [3, 4, 5]);
addTwoNumbers([9, 9, 9, 9, 9], [3, 4, 6, 2]);

/////////////////////////////////////////////////////////////
// Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest substring without repeating characters.

/*
var lengthOfLongestSubstring = function(s) {
  for
    
};

*/

/////////////////////////////////////////////////////////////
// Smallest missing integer

function solution(A) {
  for (var i = 0; i < A.length; i++) {
    for (var j = 0; j < A.length - i - 1; j++) {
      if (A[j] > A[j + 1]) {
        var temp = A[j];
        A[j] = A[j + 1];
        A[j + 1] = temp;
      }
    }
  }
  let num = 1;
  for (var k = 0; k < A.length; k++) {
    if (num < A[0] && num > A[length - 1]) {
      return num;
    } else if (num > A[k] && num < A[k + 1]) {
      return num;
    } else {
      num++;
    }
  }
  return num;
}

A = [1, 3, 6, 4, 1, 2];

/////////////////////////////////////////////////////////////
// Roman to Integer

const currNum = (n) => {
  switch (n) {
    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
      return 1000;
  }
};
//console.log(currNum("M"));
const checkNextNum = (s, i) => {
  /*let counter = 0;
  if (i == s.length - 1) {
    return 0;
  } else if (s[i + 1] == s[i + 2]) {
    counter++;
    console.log(`counter: ${counter}, i: ${i}`);
    return (counter += checkNextNum(s, i + 1));
  } else return 0;*/
  //console.log(s);
  switch (s[i]) {
    case "I":
      if (s[i + 1] == "V") {
        //console.log(`works`);
        return 4;
      } else if (s[i + 1] == "X") {
        return 9;
      }
      break;
    case "X":
      if (s[i + 1] == "L") {
        return 40;
      } else if (s[i + 1] == "C") {
        return 90;
      }
      break;
    case "C":
      if (s[i + 1] == "D") {
        return 400;
      } else if (s[i + 1] == "M") {
        return 900;
      }
      break;
    default:
      return 0;
  }
};
// when there is a segment, must add 1 to the result.
//console.log(checkNextNum("abbbbbb", 0));

//console.log(checkNextNum("IVI", 0));

var romanToInt = function (s) {
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    if (checkNextNum(s, i)) {
      sum += checkNextNum(s, i);
      //console.log(sum);
      i++;
      //console.log(repeating);
    } else {
      sum += currNum(s[i]);
      //console.log(sum);
    }
  }
  return sum;
};
console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
//console.log(romanToInt("III"));

/////////////////////////////////////////////////////////////
// Recursion & Dynamic programming
function fact(number) {
  if (number === 1) {
    return 1;
    // we need this condition to stop the infinite loop
  }
  return fact(number - 1) * number;
}

/////////////////////////////////////////////////////////////
// Permutation

/////////////////////////////////////////////////////////////
// Knapsack problem
/*got a list of items, where every itme has a value and a weight
wirte a program that maximises the value of the items you put in the bag
ensuring that you don't exceed the maximum weight
can use the items only once for each*/

items = [
  { id: "a", val: 3, w: 3 },
  { id: "b", val: 6, w: 8 },
  { id: "c", val: 10, w: 3 },
];
maxWeight = 8;
bag = ["a", "c"]; // solution

const knapSack = (items, weights, currIndex, target) => {
  //base case: when we cannot have take more items
  if (target < 0) {
    return Number.MIN_SAFE_INTEGER;
  }

  //base case: when no items are left or capacity becomes 0
  if (currIndex == items[items.length] || target === 0) {
    return 0;
  }

  // pick current item n in knapSack and recur for
  // remaining items (n - 1) with reduced capacity (weight - weights[n])
  let include =
    items.val + knapSack(values, weights, n - 1, target - weights[n]);

  // leave the current item n from knapSack and recur for
  // remaining items (n - 1)
  let exclude = knapSack(values, weights, n - 1, target);

  // return maximum value we get by picking or leaving the current item
  return Math.max(include, exclude);
};

// we need to care about the number & order of items combined
/* similar idead to permutation - fundamental difference (permutation
  only considers all combination of the same items with only orders switched)
*/
