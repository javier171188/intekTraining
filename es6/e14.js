'use strict';
let button = document.getElementById('check-button');

button.addEventListener('click', checkText);

function checkText(){
    let result = document.querySelector('.result');
    let strValues = document.getElementById('parameters').value;
    let strArray = strValues.split(',');
    let numValues = strArray.map(n=> parseInt(n,10));
    let check = includesTwo(...numValues);

    if (check){
        result.textContent = 'The function includes 2 as aparemeter.';
    }else{
        result.textContent = 'The function does not include 2 as a paremeter.';
    }
}


function includesTwo(...vars){
    let givenParamenters = Object.values(arguments);
    if (givenParamenters.includes(2)){
        return true;
    }
    else{
        return false;
    }
}
