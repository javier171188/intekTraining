'use strict';
let resultP = document.querySelector('.result');

function modifyDateObject(name,fun){
    Date.prototype[name] = fun;
}

function customDate(){
    return 'January 12';
}

modifyDateObject('constantDate', customDate);

let date = new Date();

resultP.textContent = date.constantDate();