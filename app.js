const math = require('./math');
const currency = require('./currency');
const greet = require('./greet');

/* ==========================================================================================================
   App variables
========================================================================================================== */
const clpIncome = 100000;
const taxesPercentaje = 0.10;
const charityDonation = 10000;
const bonus = 5000;

/* ==========================================================================================================
   Given an income in Chilean Pounds (clp), taxes percentages, a charity donation ammount and a income bonus,
   calculate the total income with the help of the "math" module
========================================================================================================== */
const getFinalIncome = (income, taxes, charity, bonus) => {
   const incomeTaxes = math.multiply(income, taxes);
   const minusTaxes = math.substract(income, incomeTaxes);
   const minusCharity = math.substract(minusTaxes, charity);
   const plusBonus = math.sum(minusCharity, bonus);
   return plusBonus;
}

/* ========================================================================================================
   Main app: greet with the greeting defined in the "greet" module (greet.js).
   then use the "getFinalIncome" function to calculate the final income and use the "currency" module
   to convert the clp income into Venezuelan Bolivar Soberano (VES) and US Dollars (USD).
   finally log the results
======================================================================================================== */
greet();
const finalIncome = getFinalIncome(clpIncome, taxesPercentaje, charityDonation, bonus);
const vefIncome = currency.clpvef(finalIncome);
const usdIncome = currency.clpusd(finalIncome);
console.log(`Total Income: ${finalIncome} | vef value: ${vefIncome} | usd value: ${usdIncome} `);

/* ==========================================================================================================
   NodeJs module patterns
========================================================================================================== */

/* ==========================================================================================================
   Pattern 1 (pattern1.js): Override "module.exports" with an anonymous function. this way we are just 
   getting returned a function when we "require" in "app.js"
========================================================================================================== */
const p1 = require('./pattern1'); // Returns a function
p1();

/* ==========================================================================================================
   Pattern 2 (pattern2.js): Add a property to the "module.exports" object (module.exports.property)
========================================================================================================== */
const p2_1 = require('./pattern2'); // Returns "module.exports" object
const p2_2 = require('./pattern2').sayHi;
p2_1.sayHi();
p2_2();

/* ==========================================================================================================
   Pattern 3 (pattern3.js): replace "module.exports" object with your own object (function constructor).
   because the "require" function recieves an created object, it gets this object reference, so any 
   modification to any of the returned object properties will remain even if you require the module again.
========================================================================================================== */
const p3_1 = require('./pattern3'); // returns an object of the "Pattern" type
p3_1.sayHi();
p3_1.greeting = 'Modified pattern 3';
const p3_2  = require('./pattern3');
p3_2.sayHi();

/* ==========================================================================================================
   Pattern 4 (pattern4.js): replace "module.exports" object with a function constructor. so we give the app
   the hability to create instances of the object defined. So you can have multiple objects of the Pattern
   class and they will not be the same referenced object like in pattern 3.
========================================================================================================== */
const P4 = require('./pattern4'); // returns the function contructor for "Pattern"
const p4_1 = new P4('p4_1 instance of Pattern');
p4_1.sayHi();
p4_1.greeting = 'Modified p4_1 instance of Pattern';
const p4_2 = new P4();
p4_2.sayHi();
p4_1.sayHi();

/* ==========================================================================================================
   Pattern 5 (pattern5.js): assign "module.exports" to an object with just what we want to reveal (export)
   from the module, while keeping some other variables and functions private (revealing module pattern)
========================================================================================================== */
const p5 = require('./pattern5'); // returns the object with the revealed elements
p5.sayHi();
console.log(p5.publicValue);