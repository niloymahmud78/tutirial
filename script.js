var letters = [];
var word = "freeCodeCamp"

var rword = "";

for(var i = 0; i < word.length; i++) {
    letters.push(word[i]);
}
 for (var i = 0; i <word.length; i++) {
     rword += letters.pop();
 }