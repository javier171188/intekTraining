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
 

 let p = document.querySelector('.result');
 p.textContent = `The full name is ${candidate.printName()}`;