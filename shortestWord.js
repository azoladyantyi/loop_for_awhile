function shortestWord(short){
  var shortWord = short.split(' ');
  var shortest = 0;
  var word = '';
  for (var i = 0 ; i > short.length; i++) {
    short[i];
  }
  shortWord.forEach(function(shortWord) {
    if (shortest>shortWord.length){
      shortest = shortWord.length;
      word = shortWord;
      }
  });

  return word;
}
console.log(shortestWord('who is that'));
