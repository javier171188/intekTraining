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
            let erraseB = buttons.querySelector('.dbutton');
            erraseB.setAttribute('dbid', i);
            let editB = buttons.querySelector('.ebutton');
            editB.setAttribute('dbid',i);
            let viewB = buttons.querySelector('.vbutton');
            viewB.setAttribute('dbid',i);
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
    let dbid = event.getAttribute('dbid');
    let currentIndexes = localStorage.getItem(0) + ' ';
    let exp = new RegExp(` ${dbid} `);
    currentIndexes = currentIndexes.replace(exp, ' ').slice(0,-1);
    localStorage.setItem(0, currentIndexes);
    indexes = localStorage.getItem(0).split(' ');
    placeNotes();
}

function editNote(event){
    let dbid = event.getAttribute('dbid');
    let text = localStorage.getItem(dbid);
    let editButton = document.querySelector('.editingbutton');
    let saveButton = document.querySelector('.savingbutton');
    let activity = document.querySelector('.activity');
    editButton.style.display = "inline";
    saveButton.style.display = 'none';
    pastNotes.style.display = "none";
    activity.textContent = "Edit this note";
    textSpace.value = text;
    textSpace.setAttribute('placeholder', 'Write a new version for the note');
    editButton.addEventListener('click', ()=>{
        editButton.style.display = "none";
        saveButton.style.display = 'inline';
        pastNotes.style.display = 'block';
        if (Boolean(textSpace.value)){
            localStorage.setItem(dbid, textSpace.value);
        }
        textSpace.value = '';
        activity.textContent = 'Create a Note';
        textSpace.setAttribute('placeholder', 'Write a note here');
        placeNotes();
        }, {once : true});
}

function viewNote(event){
    let dbid = event.getAttribute('dbid');
    let text = localStorage.getItem(dbid);
    let editButton = document.querySelector('.editingbutton');
    let saveButton = document.querySelector('.savingbutton');
    let activity = document.querySelector('.activity');
    let dates = document.querySelector(".hiddates");
    editButton.style.display = "inline";
    saveButton.style.display = 'none';
    pastNotes.style.display = "none";
    activity.textContent = "Current note";
    textSpace.value = text;
    textSpace.readOnly = true;
    editButton.textContent = 'Go back';
    dates.style.display = 'block';
    editButton.addEventListener('click', ()=>{
        editButton.style.display = "none";
        editButton.textContent = 'Edit';
        saveButton.style.display = 'inline';
        pastNotes.style.display = 'block';
        textSpace.value = '';
        activity.textContent = 'Create a Note';
        textSpace.setAttribute('placeholder', 'Write a note here');
        textSpace.readOnly = false;
        dates.style.display = 'none';
        placeNotes();
        }, {once : true});
}