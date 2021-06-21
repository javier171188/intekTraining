'use strict';

let months = document.querySelector('.months').textContent;
months = setNewString(months);

let result = document.querySelector('.new-months');
result.textContent = months;

function setNewString(originalString){
    let nextMonth = {January:'February', 
                    February:'March', 
                    March:'April', 
                    April:'May', 
                    May:'June', 
                    June:'July', 
                    July:'August', 
                    August:'September', 
                    September:'October',
                    October:'November',
                    November:'December', 
                    December: 'January'};

    let monthsArray = originalString.split(' ');
    let bundaryMonths = [];
    for (var i = 0; i<monthsArray.length-1; i++){
        if(monthsArray[i+1] !== nextMonth[monthsArray[i]] && !bundaryMonths.includes(monthsArray[i])){
            bundaryMonths.push(monthsArray[i]);
        }
    }
    if (!bundaryMonths.includes(monthsArray[i])){
        bundaryMonths.push(monthsArray[i]);
    }

    originalString = bundaryMonths.reduce(getNextMonth, originalString)

    function getNextMonth(originalStr, currentValue){
        return originalStr.replaceAll(currentValue, `${currentValue} ${nextMonth[currentValue]}`);
    }
    
    return originalString;
}