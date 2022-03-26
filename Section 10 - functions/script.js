////////////////////////////////////////////
//Function returning other function
////////////////////////////////////////////

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey"); //at this stage we don't have 'name'

//the above now works as a function
greeterHey("Jonnas"); //these work thanks to closure
greeterHey("Steven");

greet(`Hello`)(`Jonas`); //this also works

// Using arrow function (arrow function returning another arrow function)
const greet2 = (greeting2) => {
  (name) => console.log(`${greeting2} ${name}`);
};
