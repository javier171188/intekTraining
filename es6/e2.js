'use strict';
let button = document.querySelector('.reverse-button');

button.addEventListener('click',reverseString);


function reverseString(){
    let text = document.querySelector('#text-input').value;
    let reversedText = text.reverse();
    let reversedbyWords = text.reverseWords();
    let p1 = document.querySelector('.all');
    let p2 = document.querySelector('.words');
    p1.textContent = reversedText;
    p2.textContent = reversedbyWords;
}

function reverse(){
    let rStr = '';
    for (let i=this.length-1; i>=0; i--){
        rStr += this[i];
    }
    return rStr;
}
String.prototype.reverse = reverse;

function reverseWords(str){
    let words = this.split(' ');
    let rStr = '';
    words = words.map((s)=>{return s.reverse()});
    rStr = words.join(' ');
    return rStr;
}
String.prototype.reverseWords = reverseWords;
