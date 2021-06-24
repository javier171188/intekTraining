'use strict';
let originalArrBox = document.getElementById('original-array');
let delElmsBox = document.getElementById('elements');
let erraseButton = document.getElementById('errase-button');
let newArrTextArea = document.querySelector('.new-array');


erraseButton.addEventListener('click',applyDel);

function applyDel(){
    let stArray = originalArrBox.value;
    let stElms = delElmsBox.value;

    let origArr = stArray.split(',');
    let elements = stElms.split(',');

    origArr = origArr.map((e)=> e.trim());
    elements =elements.map((e)=> e.trim());

    let newArray = removeElements(origArr, ...elements);
    newArrTextArea.textContent = `[${newArray}]`;
}

function removeElements(array, ...elements){
    let uniElms = new Set(elements);
    for (let e of uniElms){
        array = array.filter(element => element!== e);
    }
    return array;
}
