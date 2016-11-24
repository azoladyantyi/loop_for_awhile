function longestWord(sentence) {
    var sentenceWord = sentence.split(' ');
    var longest = 0;
    var word = '';
    for (var i = 0; i < sentence.length; i++) {
      sentence[i]
    }
    sentenceWord.forEach(function(sentenceWord) {
        if (longest < sentenceWord.length) {
            longest = sentenceWord.length;
            word = sentenceWord;
        }
    });
    return word;
}
console.log(longestWord('We heard the terrifying roar of a lion'));
