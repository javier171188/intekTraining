'use strict';
//https://codepen.io/drake-p/pen/bhICx

const button = document.getElementById('button');
const numberInput = document.getElementById('number-input');
const workingArea = document.getElementById('working-area');
var fontSize;


button.addEventListener('click', () => {
    let numberDivisionsStr = numberInput.value;
    let numberDivisionsInt = parseInt(numberDivisionsStr);
    if (numberDivisionsInt > 8) numberDivisionsInt = 8;
    fontSize = 100;
    workingArea.innerHTML = '<div class="triangle"></div>';
    workingArea.style.fontSize = fontSize + 'px';

    for (let i = 1; i <= numberDivisionsInt; i++) {
        increaseOneLevel();
    }
})

function increaseOneLevel() {

    let originalTriangles = document.getElementsByClassName('triangle');
    fontSize = fontSize / 2;
    workingArea.style.fontSize = fontSize + 'px';

    let triangles = [...originalTriangles];
    for (let triangle of triangles) {
        triangle.className = triangle.className.replace('triangle', 'one-deep');

        let top = document.createElement('div');
        top.className = 'triangle top';

        let base = document.createElement('div');
        base.className = 'base';

        let left = document.createElement('div');
        left.className = 'triangle left';
        base.appendChild(left);
        let right = document.createElement('div');
        right.className = 'triangle right';
        base.appendChild(right);

        let centering = document.createElement('div');
        centering.className = 'centering';
        centering.appendChild(top);
        centering.appendChild(base);

        triangle.appendChild(centering);
    }
}