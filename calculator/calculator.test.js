const Calculator = require('./calculator');

const calculator = new Calculator();

describe('calculate', () => {
  test('add', () => {
    calculator.add(20);
    calculator.add(20);
    expect(calculator.value).toBe(40);
  });

  test('add', () => {
    calculator.add(20);
    calculator.add(8);
    expect(calculator.value).toBe(68);
  });

  test('subtract', () => {
    calculator.subtract(2);
    calculator.subtract(2);
    expect(calculator.value).toBe(64);
  });

  test('subtract', () => {
    calculator.subtract(2);
    calculator.subtract(2);
    expect(calculator.value).toBe(60);
  });

  test('divide', () => {
    calculator.divide(2);
    calculator.divide(2);
    expect(calculator.value).toBe(15);
  });

  test('divide', () => {
    calculator.divide(3);
    calculator.divide(1);
    expect(calculator.value).toBe(5);
  });

  test('multiply', () => {
    calculator.multiply(2);
    calculator.multiply(2);
    expect(calculator.value).toBe(20);
  });

  test('multiply', () => {
    calculator.multiply(2);
    calculator.multiply(2);
    expect(calculator.value).toBe(80);
  });
});
describe('Check if parametars are Numbers', () => {
  test('If parametrs are not Numbers functions should return "Your inputs should be Numbers"', () => {
    const test3 = new Calculator('a');
    expect(test3.add()).toEqual('Your inputs should be Numbers');
    expect(test3.subtract()).toEqual('Your inputs should be Numbers');
    expect(test3.divide()).toEqual('Your inputs should be Numbers');
    expect(test3.multiply()).toEqual('Your inputs should be Numbers');
  });
});