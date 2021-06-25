'use strict';
let paragraphs = document.getElementsByTagName('p');



for (let i=0; i< paragraphs.length; i = i+2){
    paragraphs[i].addEventListener('click', ()=>{changeState(i); });
}

function changeState(clicledI){
    for (let i =1; i < paragraphs.length; i = i+2){
        paragraphs[i].style.visibility = 'hidden';
    }
        paragraphs[clicledI+1].style.visibility = 'visible';
}