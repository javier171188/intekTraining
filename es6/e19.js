'use strict';
let patternBox = document.getElementById('pattern');
let button = document.getElementById('match-button');
let testText = document.querySelector('.text');
let originalText = testText.innerHTML;

button.addEventListener('click', searchPattern);

function searchPattern(){
    let pattern = patternBox.value;
    let tempText = testText.innerHTML;
    if (!pattern){
        testText.innerHTML = originalText;
        return;
    }
    
    let strParts = pattern.split('*');
    let fullWords= getFullWord(strParts[0], strParts[1]);
    for (let i = 2; i<strParts.length; i++){
        fullWords = fullWords.map((current)=>{
                let newWords = getFullWord(current, strParts[i]);
                return newWords;
                         })
        fullWords = fullWords.flat();
    }
    console.log(fullWords);

    function getFullWord(prevString, nextString){
        let prevInds = getAllIndexes(tempText, prevString);
        let nextInds = getAllIndexes(tempText, nextString);
        let words = [];
        for (let i of prevInds){
            for (let j of nextInds){
                if (j === i+ prevString.length+1){
                    let matchingWord = tempText.slice(i, j+nextString.length);
                    if (!words.includes(matchingWord)){
                        words.push(matchingWord);
                    }
                }
            }
        }
        return words;
    }
    
    subsWord(pattern);
    function subsWord(word){
        let newText = originalText.replaceAll(word, `<span>${word}</span>`);
        testText.innerHTML = newText;
    }

    function getAllIndexes(str, word) {
        let indexes = [];
        if (word===''){
            return indexes
        }
        let i = -1;
        while ((i = str.indexOf(word, i+1)) != -1){
            indexes.push(i);
        }
        return indexes;
    }
}