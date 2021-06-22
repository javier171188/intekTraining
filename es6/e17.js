'use strict';
var candidate = {
    name: {
       firstname: 'John',
       lastname: 'Galt',
       phone: '123-456-7890'
    },
    printName: function(){
        let fullName = `${this.name.firstname} ${this.name.lastname}`;
        return fullName;
    }
 }
 
let bodyDiv = document.getElementById('body');
let infoDiv = bodyDiv.querySelector('.info');
let [firstDiv, secondDiv] = infoDiv.querySelectorAll('div');

firstDiv.textContent = candidate.name.firstname;
secondDiv.textContent = candidate.printName();