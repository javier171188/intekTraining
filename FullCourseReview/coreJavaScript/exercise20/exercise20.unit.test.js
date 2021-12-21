/**
 * @jest-environment jsdom
 */
'use strict';

const { querySelectorAll } = require('../exercise11/exercise11.js');


document.body.innerHTML = `<h1 class="title">Exercise 20</h1>
Deep:
<input type="number" min="0" max="8" value="0" id='number-input'>
<button id='button'>Get triangles</button>

<div id='working-area'>

    <div class="triangle"></div>

</div>`;

let deepInput = document.querySelector('input');
let divs = document.querySelectorAll('div');
let getButton = document.querySelector('#button');
let initialTriangle = divs[0].querySelector('.triangle');


test('Check initial setup', () => {
    expect(deepInput.type).toEqual('number');
    expect(deepInput.min).toEqual('0');
    expect(deepInput.max).toEqual('8');
    expect(deepInput.value).toEqual('0');

    expect(getButton).toBeTruthy();

    expect(divs.length).toEqual(2);

    expect(initialTriangle).toBeTruthy();
})

require('./exercise20.js');
test('Check deep 1', () => {
    deepInput.value = '1';
    getButton.click();

    let topTriangles = querySelectorAll('.top');
    expect(topTriangles.length).toEqual(1);

    let baseDivs = querySelectorAll('.base');
    expect(baseDivs.length).toEqual(1);

    let lefTriangles = querySelectorAll('.left');
    expect(lefTriangles.length).toEqual(1);

    let rightTriangles = querySelectorAll('.right');
    expect(rightTriangles.length).toEqual(1);

    let triangles = document.querySelectorAll('.triangle');
    expect(triangles.length).toBe(3);
})

test('Check deep 8', () => {
    deepInput.value = '8';
    getButton.click();

    let topTriangles = querySelectorAll('.top');
    expect(topTriangles.length).toEqual(3280);

    let baseDivs = querySelectorAll('.base');
    expect(baseDivs.length).toEqual(3280);

    let lefTriangles = querySelectorAll('.left');
    expect(lefTriangles.length).toEqual(3280);

    let rightTriangles = querySelectorAll('.right');
    expect(rightTriangles.length).toEqual(3280);

    let triangles = document.querySelectorAll('.triangle');
    expect(triangles.length).toBe(6561);
})

test('Back to start', () => {
    deepInput.value = '0';
    getButton.click();

    expect(deepInput.type).toEqual('number');
    expect(deepInput.min).toEqual('0');
    expect(deepInput.max).toEqual('8');
    expect(deepInput.value).toEqual('0');

    expect(getButton).toBeTruthy();

    expect(divs.length).toEqual(2);

    expect(initialTriangle).toBeTruthy();
})