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
var lengthOfLongestSubstring = function(s) {
  for
    
};


/////////////////////////////////////////////////////////////
// Smallest missing integer

function solution(A){
  for(var i = 0; i < A.length; i++){
    for(var j = 0; j < ( A.length - i -1 ); j++){
      if(A[j] > A[j+1]){
        var temp = A[j]
        A[j] = A[j + 1]
        A[j+1] = temp
      }
    }
  }
  let num =1;
  for(var k = 0; k<A.length; k++){
    if(num < A[0] && num > A[length-1]){
      return num; 
    }
    else if(num > A[k] && num < A[k+1])
    {
      return num;
    }
    else{
      num++;
    }
  }
  return num;
}

A = [1, 3, 6, 4, 1, 2]

/////////////////////////////////////////////////////////////
// Roman to Integer

var romanToInt = function(s) {
  const result = [];
  const num = Array.from(s);
  for(let i = 0; i<num.length; i++){
    switch(num[i]){
      case 'I':
      case 


    }

  }
    
};