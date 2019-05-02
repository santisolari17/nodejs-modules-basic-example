const math = require('./math');
const currency = require('./currency');
const greet = require('./greet');

const clpIncome = 100000;
const taxesPercentaje = 0.10;
const charityDonation = 10000;
const bonus = 5000;

const getFinalIncome = (income, taxes, charity, bonus) => {

   const incomeTaxes = math.multiply(income, taxes);
   const minusTaxes = math.substract(income, incomeTaxes);
   const minusCharity = math.substract(minusTaxes, charity);
   const plusBonus = math.sum(minusCharity, bonus);

   return plusBonus;

}

greet();
const finalIncome = getFinalIncome(clpIncome, taxesPercentaje, charityDonation, bonus);
const vefIncome = currency.clpvef(finalIncome);
const usdIncome = currency.clpusd(finalIncome);
console.log(`Total Income: ${finalIncome} | vef value: ${vefIncome} | usd value: ${usdIncome} `);