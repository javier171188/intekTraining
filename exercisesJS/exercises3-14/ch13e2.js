let e = document.getElementsByClassName('exercise')[0];
let out = document.getElementsByClassName('out')[0];



function prinFunct(){
    let counter =1;
    function inner(){
        if (counter<=3){
            console.log(`Function executed ${counter} times.`);
            let p = document.createElement('p');
            p.textContent = `Function executed ${counter} times.`
            out.appendChild(p);
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