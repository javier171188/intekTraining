'use strict';
let button = document.getElementById('series-button');
button.addEventListener('click', printElement);

let fibonacci = fibonacciFunction();




function printElement(){
    let strNum = document.querySelector('.element-number').value;
    let num = parseInt(strNum);
    let result = document.querySelector('.result');
    let element = fibonacci(num);
    result.textContent = element;
}

function fibonacciFunction(){
    let cache = {0:0, 1:1, 2:1};

    function getFibonacci(n){
        if(n<0){
            n = -n;
        }
        if (n in cache){
            return cache[n];
        }
        else{
            let newElement = getFibonacci(n-1) +getFibonacci(n-2);
            cache[n] = newElement;
            return newElement;
        }
    }
    return getFibonacci;
}

