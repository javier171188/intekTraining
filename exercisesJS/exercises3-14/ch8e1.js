let e = document.getElementsByClassName('exercise')[0];



let randomSentences = ['random sentence 1', 'random sentence 2'];

function displaySentence(){
    function choose(choices) {
        var index = Math.floor(Math.random() * choices.length);
        return choices[index];
      }
      console.log(choose(randomSentences));
      e.innerHTML = choose(randomSentences);
}

setInterval(displaySentence, 60000);