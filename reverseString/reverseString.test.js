const reverseString = require('./reverseString');

it('String reversed', () => {
  expect(reverseString('hola')).toBe('aloh');
});