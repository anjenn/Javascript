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
// this booker is a variable that exists in the global environment

booker();
booker();
booker();

// we can see that the passengerCount increments

// !! closures make the functins remember all the variables the function used in the history

// secure Booking leaves the call stack after its execution
// and then we run booker function in the global scope
// new empty execution context for booker() is then created on top of the call stack
// in scope chain, booker() scope then becomes the child of the global scope, just like secureBooking() scope

// the rempty booker function needs access to passsenger count!

/* ANY function always has access to the variable environment of the execution context
where the function was created*/
// closure: Variable environment attached to the function, exactly as it was at the time and place the function was created

// booker function was born in the execution context of secureBooking
// therefore booker function has access to the passengerCount
