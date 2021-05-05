let options = document.querySelector('.options');
let content = document.querySelector('.content');
let two = document.querySelector('#two');
two.checked = true;
function onClick(ev){
    let two = document.getElementById('two').checked;
    let three = document.getElementById('three').checked;
    let four = document.getElementById('four').checked;
    if (two){
        content.style.columnCount = 2;
    }
    if (three){
        content.style.columnCount = 3;
    }
    if (four){
        content.style.columnCount = 4;
    }
}


options.addEventListener('click', onClick);