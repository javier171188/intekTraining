'use strict';
let button = document.getElementById('changing-button');

button.addEventListener('click', changeColor);

function changeColor(){
    let changElement = document.querySelector('.changing');
    let fColor = Math.floor(Math.random() * 255);
    let sColor = Math.floor(Math.random() * 255);
    let tColor = Math.floor(Math.random() * 255);
    changElement.style.background = `rgb(${fColor}, ${sColor}, ${tColor})`;
}