let e = document.getElementsByClassName('exercise')[0];
let out = document.getElementsByClassName('out')[0];

e.innerHTML += '<br/>';

function prinFunct(){
    let counter =1;
    function inner(){
        if (counter<=3){
            console.log(`Function executed ${counter} times.`);
            out.innerHTML += `Function executed ${counter} times. <br/>`;
        }
        counter++;
    }
    return inner
}

let fun = prinFunct();

function onClick(){
    let m = document.getElementById('meter');
    let number = Number(m.getAttribute('value'));
    number++;
    m.value = number;
    fun();
    if (number >= 3){
        document.getElementsByClassName("b")[0].disabled = true;
    }
    
}

let b = document.getElementsByClassName('b')[0];
b.addEventListener('click',onClick)