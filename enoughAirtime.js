const assert = require('assert');
var enoughAirtime = ['call,call,call,data,sms,sms,call,data']
var data = function(totalPhoneBill){
var sum = (50-(4 * 1.88 + 2 *12 + 3*0.55));
console.log(sum);
return sum;
for (var i=0;i<enoughAirtime.length; i++){
    data.push(enoughAirtime[i]);
}
}
assert.equal(data(),16.83);
