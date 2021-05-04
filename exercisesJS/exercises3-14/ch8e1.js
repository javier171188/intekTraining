let e = document.getElementsByClassName('exercise')[0];



let nouns = ['Raul ', 'Mark ', 'Diana ','Mary '];
let verbs = ['walks to ', 'looks at ', 'is in ', 'likes '];
let articles = ['a ', 'the '];
let places = ['park', 'store', 'theatre', 'living room'];



function displaySentence(){
    function choose(choices) {
        var index = Math.floor(Math.random() * choices.length);
        return choices[index];
      }
      let sentence = choose(nouns)+choose(verbs)+choose(articles)+choose(places);
      console.log(sentence);
      e.innerHTML = sentence;
}

setInterval(displaySentence, 60000);