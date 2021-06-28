'use strict';
let button = document.getElementById('compute-button');
let resultArea = document.querySelector('.result');

button.addEventListener('click', showNumber)

function showNumber(){
    let stBase = document.getElementById('base').value;
    let stExponent = document.getElementById('exponent').value;
    let base = parseFloat(stBase);
    let exponent = parseFloat(stExponent);

    let n = myPowerFn(base);
    let result = n(exponent);
    let resultMessage = `${base}^${exponent} = ${result}`
    resultArea.textContent = resultMessage;
}




function myPowerFn(base){
    function computePower(exponent){
        return base**exponent;
    }
    return computePower;
}


