const stringLength = require('./stringLength');

it('String Length', () => {
  expect(stringLength('hola')).toBe(4);
});

it('stringLength should return number', () => {
  expect(typeof stringLength('hola')).toBe('number');
});

it('At least 1 character', () => {
  expect(stringLength('')).toBe('Your text should contain at least 1 character');
});

it('No more than 10 characters', () => {
  expect(stringLength('This string is more than 10 character')).toBe('Your text should contain no more than 10 characters');
});