const private = 'Pattern 5';
const publicValue = 42;

const sayHi = function() {
   console.log(private);
}

module.exports = {
   sayHi,
   publicValue
}