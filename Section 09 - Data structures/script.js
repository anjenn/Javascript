'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  // we can put any expression in the square brackets below
  [weekdays[0]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  [`day - ${2+5}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
},;

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours, //object inside object (ES6 update)

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  newFunction(a,b){
    console.log(a,b);
  },

  // when we received an object, we immediately do the destructuring
  orderDelivery: function ({ starterIndex = 0, mainIndex, time, address }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]}, and ${this.mainMenu[mainIndex]},
    will be delivered to ${address} at ${time}`);
  },
};
