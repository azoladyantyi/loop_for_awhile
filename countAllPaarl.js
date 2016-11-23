//const assert = require('assert');
function countAllPaarl(reg){
var Paarlreg = reg.split(', ');
var regNumbers = [];

for (var i=0;i<Paarlreg.length; i++){

    if (Paarlreg[i].startsWith('CJ')){
       regNumbers.push(Paarlreg[i]);
      //  console.log(Paarlreg);
    }
  }
    console.log(regNumbers.length);
    return regNumbers;
};
countAllPaarl('CJ 1233, CA 879, GP 4665, CJ 8989, CA 1995, CJ 1234');
//assert.equal(countAllPaarl('CJ 1233, CA 879, GP 4665, CJ 8989, CA 1995, CJ 1234'),3);
