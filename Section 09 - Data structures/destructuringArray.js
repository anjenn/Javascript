'use strict';

// Data needed for a later exercise
//const flights =
//  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurantDA = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const [first, second] = restaurantDA.categories;
console.log(first, second);

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr; // destructuring array
console.log(x, y, z);

let [main, secondary] = restaurantDA.categories;
console.log(main, secondary); //this prints Italian Vegetarian
// In order to swap 2 elements, we would have to do:
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);
// However, with destructuring array, we can just do:
[main, secondary] = [secondary, main];
console.log(main, secondary);

//we can receive 2 return values from a function
const [starter, mainCourse] = restaurantDA.order(2, 0);
console.log(starter, mainCourse);

//more practice
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j);
const [l, , [m, h]] = nested; // destructuring inside destructuring
console.log(l, m, h);

//when we don't know the lenght of array (assuming)
const [p = 1, q = 1, r = 1] = [8, 9];
