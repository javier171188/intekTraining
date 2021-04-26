let e = document.getElementsByClassName('exercise')[0];
let element = document.getElementById('a');

e.innerHTML = 'With the given element we have: <br/> <br/>';
function printAttr (el, atributes){
    let value;
    for (a of atributes){
        value = el.getAttribute(a);
        console.log(`${a}: ${value}`);
        e.innerHTML += `${a}: ${value} <br/>`;
    }
}

printAttr(element, ['id', 'class', 'style', 'val'])