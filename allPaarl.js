
var reg = 'CJ1233, CA5879,GP4665,CJ8989,CA1995';
function allPaarl(reg){
var allPaarlreg = reg.split(',');
var regNumbers = [];
for (var i = 0; i < allPaarlreg.length; i++){

    if(allPaarlreg[i].startsWith('CJ')){

        regNumbers.push(allPaarlreg[i]);
        console.log(regNumbers);


    }
  }

}
allPaarl(reg)
