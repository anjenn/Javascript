// execution context, call stack, scope chain
// call stack: order in which functions were called
// scope chain: order in which functions are written in the code

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
