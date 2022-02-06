'use strict';

// Data needed for first part of the section
const restaurantDO = {
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
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // when we received an object, we immediately do the destructuring
  orderDelivery: function ({ starterIndex = 0, mainIndex, time, address }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]}, and ${this.mainMenu[mainIndex]},
    will be delivered to ${address} at ${time}`);
  },
};

//Here, we didn't pass in 4 arguments, but 1 object.
//Doesn't need to match the ordre specified in the function.
restaurantDO.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

//Destructuring Object
const { name, openingHours, categories } = restaurantDO;
const {
  name: restaurantDOName,
  openingHours: hours,
  categories: tags,
} = restaurantDO;
console.log(restaurantDOName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurantDO;
// setting a default value for menu, and existing values for starterMenu
console.log(menu, starters); //this way, we don't get undefined for menu

// Mutating variables
let e = 111;
let f = 999;
const obj = { e: 23, f: 7, g: 14 };
({ e, f } = obj); /* when we use curly brackets and equal sign, it expects
a code block. Hence we need to wrap them in parenthesis */

// Nested Objects
const { fri } = openingHours; // openingHours is the object that we are destructuring
console.log(fri);
