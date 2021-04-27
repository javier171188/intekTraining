let g = document.getElementsByClassName('grid')[0];
let c, w;

let nRows, nColumns;
function onClick(){
    nRows = document.getElementById('raws').value;
    nRows = Math.abs(nRows);
    nColumns = document.getElementById('columns').value;
    nColumns = Math.abs(nColumns);
    g.innerHTML = ' ';
    for (let i=0; i<nColumns*nRows; i++){
        g.innerHTML += `<div class = "userg"> ${i} </div>`;
    }
    w = 100/nColumns;
    c = document.getElementsByClassName('userg');
    for (let i of c){
        i.style.width = String(w)+'%';
    }
}

let button = document.getElementById('b');
button.addEventListener('click', onClick);