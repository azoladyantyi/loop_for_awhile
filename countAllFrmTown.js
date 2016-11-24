const assert = require('assert');
var allFromTown = function(Stel, Kul) {
  var reg = Stel.split(',');

  var regNumber = [];
  for(var i=0;i<reg.length; i++){

    if (reg[i].startsWith(Kul)){
      regNumber.push(reg[i]);

    }
  }
  return regNumber.length;
};
var fromStellies = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
console.log(fromStellies);
assert.deepEqual(fromStellies, 3);
