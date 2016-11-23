 var dispayEachRegNumber = function(regNumber){
 var registration = regNumber.split(', ');
 for (var i=0;i<registration.length; i++){
  console.log(registration[i]);
}
console.log(registration);
    return registration;
 };
 dispayEachRegNumber('CJ 1233, CA 5879, GP 4665, CJ 8989, CA 1995');
