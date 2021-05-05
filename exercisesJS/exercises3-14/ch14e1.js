let g = document.querySelector('.grid');
let c, w;

let nRows, nColumns;
function onClick(){
    nRows = document.getElementById('raws').value;
    nRows = Math.abs(nRows);
    nColumns = document.getElementById('columns').value;
    nColumns = Math.abs(nColumns);
    g.innerHTML = '';
    let fragment = new DocumentFragment();
    for (let i=0; i<nColumns*nRows; i++){
        let div = document.createElement('div');
        div.setAttribute('class', "userg");
        div.textContent = i;
        fragment.appendChild(div);
    }
    g.appendChild(fragment);
    w = 100/nColumns;   
    c = document.getElementsByClassName('userg');
    for (let i of c){
        i.style.width = String(w)+'%';
    }
}

let button = document.getElementById('b');
button.addEventListener('click', onClick);