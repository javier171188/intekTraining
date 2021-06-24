'use strict';
let min = -27;
let max = 10;

let rand = getRandom(-5,5);
for (let i = 0; i<30; i++){
    console.log(rand());
    //rand();
}


function getRandom(min,max){
    let allNumbers = [];
    for (let n = min; n<=max; n++){
        allNumbers.push(n);
    }
    
    function getNumber(){
        let range = allNumbers.length;
        if (range <= 0){
            return `There are no more numbers in the interval`// [${min}, ${max}]`;
        }
        let index = Math.floor(Math.random()*range);
        let randomResult = allNumbers[index];
        allNumbers.splice(index, 1);
        return randomResult;
    }
    return getNumber;
}