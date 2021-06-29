'use strict';

let valButton = document.getElementById('validation-button');
let inputTextArea = document.getElementById('text-check');
let resultArea = document.querySelector('.status');

let orderedKeys = { first:'1234567890',
                    second:'qwertyuiop',
                    third: 'asdfghjkl',
                    fourd: 'zxcvbnm',
                    revFirst: '0987654321',
                    revSecond: 'poiuytrewq',
                    revThird: 'lkjhgfdsa',
                    revFourd: 'mnbvcxz'};

valButton.addEventListener('click', startCheck);

function startCheck(){
    let inpText = inputTextArea.value;
    if (inpText.length < 4){
        resultArea.textContent = 'The string is correct.';
    }else if (checkString(inpText)){
        resultArea.textContent = 'Sorry, the string is incorrect.';
    }else{
        resultArea.textContent = 'The string is correct.';
    }

    function checkString(text){
        for (let i = 0; i <= text.length -4; i++){
            let checkStr = text.substring(i,i+4);
            for (let key in orderedKeys){
                if (orderedKeys[key].includes(checkStr)) return true; 
            }
        }
        return false;
    }
}
