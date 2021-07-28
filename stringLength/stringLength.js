const stringLength = (str) => {
  if (str.length < 1) {
    return 'Your text should contain at least 1 character';
  } if (str.length > 10) {
    return 'Your text should contain no more than 10 characters';
  }
  return str.length;
};

module.exports = stringLength;