class Calculator {
  constructor() {
    this.result = 0;
  }

  get value() {
    return this.result;
  }

  add(a) {
    if (typeof (a) === 'number') {
      this.result += a;
    }
    return 'Your inputs should be Numbers';
  }

  subtract(a) {
    if (typeof (a) === 'number') {
      this.result -= a;
    }
    return 'Your inputs should be Numbers';
  }

  divide(a) {
    if (typeof (a) === 'number') {
      this.result /= a;
    }
    return 'Your inputs should be Numbers';
  }

  multiply(a) {
    if (typeof (a) === 'number') {
      this.result *= a;
    }
    return 'Your inputs should be Numbers';
  }
}

module.exports = Calculator;