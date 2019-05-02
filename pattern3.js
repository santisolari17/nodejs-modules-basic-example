function Pattern() {
   this.greeting = 'Pattern 3';
   this.sayHi = function() {
      console.log(this.greeting);
   }
}

module.exports = new Pattern();