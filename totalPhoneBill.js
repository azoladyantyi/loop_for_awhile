const assert = require('assert');
var enoughAirtime = 'call,sms,call,sms,sms';
var totalPhoneBill = function(data){
  var dataList = data.split(",");
  var total = 0;
  //console.log(totalPhoneBill);
  //return dataList;
  for(var i=0;i<dataList.length; i++){
    switch (dataList[i]) {
      case 'call':
        total = total + 2.75;
        break;

      case 'sms':
        total = total + 0.65;
    }
  }
    console.log((total).toFixed(2));
  return total;

};
//console.log(total);
assert.equal(totalPhoneBill(enoughAirtime).toFixed(2),7.45);
