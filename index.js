const Deceimal = require('decimal.js').default;

function plus(a, b) {
  return new Deceimal(a).plus(new Deceimal(b));
}

function sub(a, b) {
  return new Deceimal(a).sub(new Deceimal(b));
}

function mul(a, b) {
  return new Deceimal(a).mul(new Deceimal(b));
}

function div(a, b) {
  return new Deceimal(a).div(new Deceimal(b));
}

console.log(plus(0.1, 0.2));
console.log(sub(0.3, 0.1));
console.log(mul(0.1, 0.2));
console.log(mul(0.3, 0.1));
