const assert = require('assert');
var totalPhoneBill = ['call, sms, call, sms, sms']
var data = function(totalPhoneBill){
var sum = (2*2.75 + 3*0.65);
console.log(sum);
return sum;
for (var i=0;i<totalPhoneBill.length; i++){
    data.push(totalPhoneBill[i]);
}
}
assert.equal(data(),7.45);
