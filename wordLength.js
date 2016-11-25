const assert = require('assert');
function wordLength(allWords){
    var sentenceWord = allWords.split(' ');
    var sentence = 0;

    for (var i= 0;i<sentenceWord.length; i++){

    sentence = sentence + sentenceWord[i].length;
        }
           return sentence;
    };
console.log(word);

var word = wordLength('We heard the terrifying roar of a lion');
assert.equal(word, 31);
