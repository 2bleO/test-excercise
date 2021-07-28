const capitalize = require('./capitalize');

it('should return capitalized text', () => {
  expect(capitalize('moon')).toBe('Moon');
});