var shoppingList = '1x bread, 6xhot dogrolls, 2x tubs of margarine ';
var list = function(shoppingList){
 var shoppingList = shoppingList.split(', ');
 var myShoppingList = [];
  for (var i=0;i<shoppingList.length; i++){
      myShoppingList.push(shoppingList[i]);
  console.log(shoppingList[i]);
}


};
list('1x bread, 6xhot dogrolls, 2x tubs of margarine ');
const assert = require('assert');
assert.equal(list(myShoppingList),'1x bread, 6xhot dogrolls, 2x tubs of margarine ');
