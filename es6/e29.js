'use strict';
let id1 = document.getElementById('id1');
let divCont = document.querySelector('div');


id1.addEventListener('click', changeState);

function changeState(){
    if (divCont.style.visibility === 'hidden'){
        divCont.style.visibility = 'visible';
        id1.textContent = 'Hide';
    }else{
        divCont.style.visibility = 'hidden';
        id1.textContent = 'Show';
    }
}


