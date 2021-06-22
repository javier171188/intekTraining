'use strict';
let today = document.querySelector('.today');
let tomorrow = document.querySelector('.tomorrow');

Date.prototype.nextDay = nextDay;

function nextDay(){
    let current = this.getDate();
    let newDate = new Date(this.setDate(current));
    newDate.setDate(current+1);
    return newDate;
}

var date = new Date(); 
today.textContent = date;
tomorrow.textContent = date.nextDay();