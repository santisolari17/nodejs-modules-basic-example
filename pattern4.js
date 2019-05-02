function Pattern(customGreeting) {
   customGreeting ? this.greeting = customGreeting : this.greeting = 'Pattern 4';
   this.sayHi = function() {
      console.log(this.greeting);
   }
}

module.exports = Pattern;