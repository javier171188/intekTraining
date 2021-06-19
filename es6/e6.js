'use strict';
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
                December: null};

let testString = "January February March January February March";
let testArray = testString.split(' ');

let bundaryMonths = [];
for (var i = 0; i<testArray.length-1; i++){
    if(testArray[i+1] !== nextMonth[testArray[i]] && !bundaryMonths.includes(testArray[i])){
        bundaryMonths.push(testArray[i]);
        
    }
}
if (!bundaryMonths.includes(testArray[i])){
    bundaryMonths.push(testArray[i]);
}

testString = bundaryMonths.reduce(reducer, testString)

console.log(testString);
function reducer(acumulator, currentValue){
    return acumulator.replaceAll(currentValue, `${currentValue} ${nextMonth[currentValue]}`);
}