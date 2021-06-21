'use strict';
class Person{
    constructor(name,lastName){
        this.name = name;
        this.lastName = lastName;
    }

    getName(){
        return `${this.name} ${this.lastName}`;
    }

    getData(url){
        let data = JSON.stringify(this);
        let request = new Request(url, {
            method: 'POST',
            body: data,
            headers: new Headers()
        });
        fetch(request).then(function() {
                let answerP = document.querySelector('.sended');
                answerP.textContent = 'data sended';
                })
    }
}

class Medic extends Person{
    constructor (name, lastName, specialty){
        super(name, lastName);
        this.specialty = specialty;
    }
}
 

let savingButton = document.getElementById('saving-button');

savingButton.addEventListener('click', savePerson);

function savePerson(){
    let name = document.getElementById('name').value;
    let lastName = document.getElementById('last-name').value;
    let specialty = document.getElementById('specialty').value;
    let descArea = document.querySelector('.person');
    let messege;
    let p1 = new Medic(name, lastName, specialty);



    if (!p1.name && !p1.lastName){
        messege = 'The person is unknown';
    }
    else{
        if (p1.specialty){
           messege = `The person is called: ${p1.name} ${p1.lastName}, and its specialty is ${p1.specialty}`;
        }else{
            messege = `The person is called ${p1.name} ${p1.lastName}`;
        }
    }
    descArea.textContent = messege;
    p1.getData('localhost');
}




