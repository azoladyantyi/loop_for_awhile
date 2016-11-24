const assert = require('assert');
var allFromTown = function(Stel, Kul) {
  var reg = Stel.split(',');

  var regNumber = [];
  for(var i=0;i<reg.length; i++){

    if (reg[i].startsWith(Kul)){
      regNumber.push(reg[i]);

    }
  }
  return regNumber;
};
var fromStellies = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
console.log(fromStellies);
assert.deepEqual(fromStellies, ['CL 124', 'CL 345', 'CL 341']);

var fromKuilsriver = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CF');
console.log(fromKuilsriver);
assert.deepEqual(fromKuilsriver, []);
