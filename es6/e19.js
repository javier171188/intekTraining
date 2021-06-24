'use strict';
let patternBox = document.getElementById('pattern');
let button = document.getElementById('match-button');
let testText = document.querySelector('.text');
let originalText = testText.textContent;

button.addEventListener('click', searchPattern);

function searchPattern(){
    let pattern = patternBox.value;
    if (!pattern){
        testText.innerHTML = originalText;
        return;
    }
    
    let words = [pattern];
    let wildInds = getAllIndexes(pattern, '*');
    let createdWords;
    for (let i of wildInds){
        for (let p of words){
            createdWords = [];
            for (let l=32; l<=126; l++){
                if (originalText.includes(`${p.substring(0, i)}${String.fromCharCode(l)}`)){
                    let newWord = `${p.substring(0, i)}${String.fromCharCode(l)}${p.substring(i + 1)}`;
                    if (!words.includes(newWord)){
                        createdWords.push(newWord);
                    }
                }
            }
            words = words.concat(createdWords);
        }
    }
    words = words.filter(word=> originalText.includes(word));
    console.log(words);

    
    /*if (wildInds.length<1){
        subsWord(pattern);
        return;
    }*/


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