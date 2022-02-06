//We use it when we build an array, or pass values into a function

const arr0 = [7, 8, 9];
const badNewArr = [1, 2, arr0[0], arr0[1], arr0[2]];

console.log(badNewArr);

const newArr = [1, 2, ...arr]; // when we wanna write multiple values
//separated by commas, or pass arguments into a function
const newArr2 = [1, 2, arr]; // if we do this, we include entire array here
console.log(newArr);

console.log(...newArr); // == console.log(1, 2, 7, 8, 9);

const restauRANT = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
  
};
const newMenu = [...restauRANT.mainMenu, `Gnocci`];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restauRANT.mainMenu];

// Join 2 arrays
const menu1 = [...restauRANT.mainMenu, ...restauRANT.starterMenu];

// Iterables: arrays, strings, maps, sets, NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];

// Real World Example
/*const ingredients = [
  prompt(`Let\'s make pasta! Ingredient 1: `),
  prompt(`Let\'s make pasta! Ingredient 2: `),
  prompt(`Let\'s make pasta! Ingredient 3: `),
];*/

const ingredients = ['egg', 'mushroom', 'sausage'];

restauRANT.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restauRANT, founder: `Guiseppe` };
console.log(newRestaurant);

//////////////////////////////////////////////////////////
// REST PATTERN (opposite of spread)
// while spread is on the right side of '='
// rest is on the left side of '='
// used when we otherwise would write VARIABLE NAMES separated by commas

const [one, two, ...others] = [1, 2, 3, 4, 5];
console.log(one, two, others);

// rest element must be the last element
const [pizza, risotto, ...otherFood] = [
  ...restauRANT.mainMenu,
  ...restauRANT.starterMenu,
];

console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours; //destructuring openingHours
console.log(weekdays); // everything except 'sat'

// Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(2, 3, 5);

const arrayToBeAdded = [1, 5, 7];
add(...arrayToBeAdded);

restauRANT.orderPizza('mushrooms'); //other ingredients store nothing
