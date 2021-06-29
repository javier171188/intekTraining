'use strict';

class Calculator{
    constructor(initalValue = 0){
        this.value = initalValue;
    }

    add(number){
        this.value = this.value + number;
    }

    substract(number){
        this.value = this.value - number;
    }

    multiply(number){
        this.value = this.value*number;
    }

    divide(number){
        if (number !== 0){
            this.value = this.value/number;
        }
    }
}

let calculator = new Calculator;
let resultArea = document.getElementById('result');
let zeroDiv = document.querySelector('.zerodiv');

resultArea.textContent = calculator.value;

let numberArea = document.getElementById('number-area');
let buttons = document.querySelector('.buttons');

buttons.addEventListener('click', operate)

function operate(event){
    let clicked = event.target;
    let action = clicked.id;
    let value = numberArea.value;
    value = parseFloat(value);
    zeroDiv.textContent = '';
    if (value === 0 && action === 'divide'){
        zeroDiv.textContent = "We can't divide by zero."
        
    }
    switch (action){
        case 'add':
            calculator.add(value);
        break;
        case 'sub':
            calculator.substract(value);
        break;
        case 'mult':
            calculator.multiply(value);
        break;
        case 'divide':
            calculator.divide(value);
        break;
    }
    resultArea.textContent = calculator.value;
}