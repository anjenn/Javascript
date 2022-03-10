const underscoreToCamel = function (str) {
  /*
  for (row of block) {
  }
  */
  const [first, second] = str.toLowerCase().trim().split("_");
  console.log(second);
  const newSecond = second.replace(second[0], second[0].toUpperCase());
  console.log(newSecond);
  return first + newSecond;
};

console.log(underscoreToCamel("hi_iM"));
