'use strict';
//https://codepen.io/drake-p/pen/bhICx

const button = document.getElementById('button');
const numberInput = document.getElementById('number-input');
const workingArea = document.getElementById('working-area');
var fontSize = 100;

button.addEventListener('click', () => {
    let numberDivisionsStr = numberInput.value;
    let numberDivisionsInt = parseInt(numberDivisionsStr);
    let originalTriangles = document.getElementsByClassName('triangle');
    fontSize = fontSize / 2;
    workingArea.style.fontSize = fontSize + 'px';

    let triangles = [...originalTriangles];
    for (let triangle of triangles) {
        triangle.className = triangle.className.replace('triangle', 'one-deep');
        let fragment = document.createDocumentFragment()
        let top = document.createElement('div');
        top.className = 'triangle top';
        fragment.appendChild(top);

        let base = document.createElement('div');
        base.className = 'base';

        let left = document.createElement('div');
        left.className = 'triangle left';
        base.appendChild(left);
        let right = document.createElement('div');
        right.className = 'triangle right';
        base.appendChild(right);
        fragment.appendChild(base);
        triangle.appendChild(fragment);
    }
})
