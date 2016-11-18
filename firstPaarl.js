var reg = 'CJ1233, Ca879, GP4665, CJ8989, CA1995';
function firstPaarl(reg){
var firstPaarlreg = reg.split(',');
var regNumbers = [];
for (var i = 0; i < firstPaarlreg.length; i++){

    if (firstPaarlreg[i].startsWith('CJ')){

       regNumbers.push(firstPaarlreg[i]);
        console.log(regNumbers);


    }
  }

}
firstPaarl(reg)
