//localStorage.clear();
let textSpace = document.getElementsByName('textarea')[0];
let button = document.getElementsByClassName('savingbutton')[0];
let pastNotes = document.getElementsByClassName('pastnotes')[0];

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
    for (let i = indexes.length-1; i>=0;  i--){
        if (i != '0'){
            //pastNotes.innerHTML += '<br/>' + localStorage.getItem(i);
            div = document.createElement('div');
            div.setAttribute('class', 'pastnote');
            div.textContent = localStorage.getItem(i).slice(0,10);
            if (localStorage.getItem(i).length > 10){
                div.textContent +=  '...';
            }
            buttons = document.createElement('div');
            button.setAttribute('class','buttoncontainer');
            editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            fragment.appendChild(div);
        }
    }
    pastNotes.appendChild(fragment);
}
