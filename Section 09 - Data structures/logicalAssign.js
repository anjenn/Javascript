const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};
rest2.numGuests = rest2.numGuests || 10;
//the same as
rest2.numGuests ||= 10;
//rest1.numGuests ||= 10; // because it has 0, we need a falsy operator
rest1.numGuests ??= 10;

rest1.owner = rest1.owner && '<ANONYMOUS>'; // rest1.owner is falsy, it returns undefined
rest2.owner = rest2.owner && '<ANONYMOUS>'; // rest2.owner is truthy, it anonymises
// can as well do &&=
