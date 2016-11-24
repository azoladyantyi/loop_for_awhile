const assert = require('assert')
var enoughAir = 'call,call,call,data,sms,sms,call,data';
var Airtime = function(Air){
  var AirT = Air.split(',');
  var total = 0;

  for(var i=0;i<AirT.length; i++){
    switch (AirT[i]) {
      case 'call':
        total = total + 1.88;
        break;

      case 'sms':
        total = total + 0.75
        break;

      case 'data':
        total = total + 12;

      default:
      total = total + 0

    }
  }
  console.log((50 - total).toFixed(2));
return 50 - total;
};
assert.equal(Airtime(enoughAir).toFixed(2),16.98);
