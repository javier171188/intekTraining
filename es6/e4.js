'use strict';

let button = document.querySelector('.flat-button');
button.addEventListener('click',flatImput);

function flatImput(){
    let strArray = document.querySelector('#array').value;
    let array = JSON.parse(strArray);
    let resultP = document.querySelector('.result');
    while (hasObject(array)){
        array = array.flat();
    }

    resultP.textContent = `Flat array: [${array}]`;
    function hasObject(array){
        for (let e of array){
            if (typeof e == 'object' && e){
                return true;
            }
        }
        return false
    }
}

