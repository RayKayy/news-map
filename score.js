//Import data file from afinn.js
var afinn = require('./afinn.js')


//Create a script that takes in a string and returns a value between -5 and 5 based on the words semantic value provided in AFINN dataset.

console.log(toSemVal("This is a happy great sentence"));
console.log(toSemVal("This is a sad bad sentence"));


//Return the average of the total score accumulated by the words in sentence.
function toSemVal(phrase) {

  var result = 0;

  phrase = pToArray(phrase.toLowerCase());

  console.log(phrase);

  var total = 0;
  var counter = 0;

  for (let i = 0; i < phrase.length; i++) {
    if (phrase[i] in afinn) {
      console.log(phrase[i]);
      total += afinn[phrase[i]];
      counter ++;
    }
  }
  return total / counter;
}

function pToArray(str) {

  return str.split(" ");

}

