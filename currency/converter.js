const rates = require('./rates.json');

const clpvef = (clpAmmount) => {
   const rate = rates.clpvef;
   return clpAmmount * rate;
}

const clpusd = (clpAmmount) => {
   const rate = rates.clpusd;
   return clpAmmount * rate;
}

module.exports = {
   clpvef,
   clpusd
}