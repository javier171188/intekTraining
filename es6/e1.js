'use strict';
let movingFunction = moveLeft();

setInterval(movingFunction, 1);


function moveLeft(){
    let box = document.querySelector('.box');
    let position = 90;
    function place(){
        box.style.left = `${position}%`;
        position = position - 0.01;
        if (position <= 0){
            position = 90;
        }
    }
    return place;
}

