'use strict';
let patternBox = document.getElementById('pattern');
let testText = document.querySelector('.text');
let text = testText.value;

patternBox.addEventListener('keyup', searchPattern);

function searchPattern(){
    let pattern = patternBox.value;
    console.log(pattern);
}