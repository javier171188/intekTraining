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


    let patterns = [pattern];
    let newPatterns;

   // while (patterns.some((str)=>str.includes('*'))){
        newPatterns = [];
        for (let p of patterns){
            newPatterns.push(simpPattern(p));
        }
        patterns = newPatterns.flat().slice();
        debugger;
    //}

    function simpPattern(pattern){
        let words = [];
        let wildInds = pattern.indexOf('*');
        for (let l=32; l<=126; l++){
            let firstPart = pattern.slice(0,wildInds) + String.fromCharCode(l);
            let index = originalText.indexOf(firstPart);
            if ( index >= 0){
                words.push(firstPart+pattern.slice(wildInds+1));
            }
        }
        return words;
    }

    
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