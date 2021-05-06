//localStorage.clear();
let textSpace = document.getElementsByName('textarea')[0];
let button = document.querySelector('.savingbutton');
let pastNotes = document.querySelector('.pastnotes');

if (!localStorage.getItem(0)){
    localStorage.setItem(0,'0');
}

let indexes = localStorage.getItem(0).split(' ');
let lastIndex = indexes[indexes.length-1];

placeNotes();
button.addEventListener('click',saveCurrentNote);




//functions
function saveCurrentNote(){
    if (Boolean(textSpace.value)){
        let newIndex = Number(lastIndex) +1;
        localStorage.setItem(newIndex, textSpace.value);
        textSpace.value = '';
        let renewIndexes = localStorage.getItem(0) + ' '  + String(newIndex);
        localStorage.setItem(0, renewIndexes);
        indexes = localStorage.getItem(0).split(' ')
        lastIndex = indexes[indexes.length-1];
        placeNotes();
    }
}

function placeNotes(){
    pastNotes.innerHTML = '';
    let fragment = document.createDocumentFragment()
    indexes.reverse();
    for (let i of indexes){
        if(i!=='0'){
            let temp = document.querySelector('#notes');
            let div = temp.content.querySelector('.pastnote');  
            let p = div.querySelector('p');
            let buttons = div.querySelector('.buttons');
            let errase = buttons.querySelector('.dbutton');
            errase.setAttribute('dbid', i);
            p.textContent = localStorage.getItem(i).slice(0,10);
            if (localStorage.getItem(i).length > 10){
                p.textContent +=  '...';
            }
            let a = document.importNode(div, true);
            fragment.appendChild(a);
        }
    }
    pastNotes.appendChild(fragment);
    indexes.reverse();
}

function delNote(event){
    console.log(localStorage.getItem(0));
    let dbid = event.getAttribute('dbid');
    let currentIndexes = localStorage.getItem(0) + ' ';
    let exp = new RegExp(` ${dbid} `);
    console.log(exp);   
    currentIndexes = currentIndexes.replace(exp, ' ').slice(0,-1);
    console.log(currentIndexes);
    localStorage.setItem(0, currentIndexes);
    indexes = localStorage.getItem(0).split(' ');
    placeNotes();
}