'use strict';
let patternBox = document.getElementById('pattern');
let testText = document.querySelector('.text');
let originalText = testText.textContent;
patternBox.addEventListener('keyup',searchPattern)

searchPattern();
function searchPattern(){
    let pattern = patternBox.value;
    if (!pattern){
        testText.innerHTML = originalText;
        return;
    }
    if (pattern ==='*'){
        let newText = `<span>${originalText}</span>`;
        testText.innerHTML = newText;
        return
    }
    
    let words = [pattern];
    let wildInds = getAllIndexes(pattern, '*');
    let createdWords;
    for (let i of wildInds){
        for (let p of words){
            createdWords = [];
            for (let l=32; l<=126; l++){
                let newWord = `${p.substring(0, i)}${String.fromCharCode(l)}${p.substring(i + 1)}`;
                if (originalText.includes(newWord.substring(0,i+1)) && !words.includes(newWord)){
                    createdWords.push(newWord);
                }
            }
            words = words.concat(createdWords);
        }
    }
    words = words.filter(word=> originalText.includes(word));
    

    subsWord(words);
    function subsWord(words){
        testText.textContent = originalText;
        for (let word of words){
            let newText = testText.innerHTML;
            newText = newText.replaceAll(word, `<span>${word}</span>`);
            testText.innerHTML = newText;
        }
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