var regNumbers = ('CJ25', 'CA45' , 'CA85', 'CJ50', 'CJ12');
var countAllPaarl = function(regNumbers){
 var regNumbers = regNumbers.startsWith('CJ');
 var reg = [];
  for (var i=0;i<regNumbers.length; i++){
      reg.push(regNumbers[i]);
  console.log(regNumbers[i]);
}

};
countAllPaarl('3');
const assert = require('assert');
assert.equal(countAllPaarl(regNumbers),3);
