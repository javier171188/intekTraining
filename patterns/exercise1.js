//localStorage.clear();

view(presenter).main();

//Model
function model(){
   
    let strData = localStorage.getItem('0');
    let data = JSON.parse(strData);

    function saveNote(index, obj){
        if (data){
            data[index] = obj;
        } else {
            data = {'1':obj};
        }
        localStorage.setItem('0', JSON.stringify(data) );
        view(presenter).main(); //The model only should comunicate with view throg presenter...
    }

    function deleteNote(data){
        localStorage.setItem('0', JSON.stringify(data) );
        view(presenter).main(); //The model only should comunicate with view throg presenter...
    }

    return {
        'data': data,
        'saveNote':saveNote,
        'deleteNote': deleteNote
    }
}

//Presenter
function presenter(model){
    let data = model().data;
    let activeNotes = {};
    for (let i in data){
        if (data[i].active){
            activeNotes[i] = data[i];
        }
    }

    function saveNote(note){
        let indexes = data ? Object.keys(data) : '';
        if (indexes !== ''){
            indexes = indexes.map((n)=>{
                return parseInt(n);
            });
            let newIndex = Math.max(...indexes)+1;
            var strIndex =  String(newIndex);
        } else{
            var strIndex = '1';
        }
        let objectNote = {'createDate':'not yet', 'lastMDate':'not yet', 'note':note, 'active':true};
        model().saveNote(strIndex, objectNote);
    }

    function deleteNote(dbid){
        data[dbid]['active'] = false;
        model().deleteNote(data);
    }
    
    return {
        'data':activeNotes,
        'saveNote': saveNote,
        'deleteNote':deleteNote
    }
}

//View
function view(presenter){
    let searchBox = document.querySelector('#sarchingbox');
    let activityTitle = document.querySelector('.activity');
    let datesBox = document.querySelector('.hiddates');
    let textSpace = document.getElementsByName('textarea')[0];
    let saveButton = document.querySelector('.savingbutton');
    let editButton = document.querySelector('.editingbutton');
    let cancelButton = document.querySelector('.cancelingbutton');
    let pastNotes = document.querySelector('.pastnotes');
    let activeNotes = presenter(model)['data'];
    

    pastNotes.addEventListener('click', clickOnNote);
    saveButton.addEventListener('click', saveNote, {'once':true});


    function clickOnNote(ev){
        let clicked = ev.target;
        clickedClass = clicked.getAttribute('class');
        switch (clickedClass){
            case "vbutton":
                //viewNote(clicked);
                viewConf();
            break;
            case "ebutton":
                //editNote(clicked);
                //!!!!Check the saving button should not go back yet !!!!
                editConf();
            break;
            case "dbutton":
                //delNote(clicked);
                let dbid = clicked.getAttribute('dbid');
                presenter(model).deleteNote(dbid);
            break;
        }
    }

    function mainConf(){
        searchBox.style.display = 'inline';
        activityTitle.textContent = 'Create a note.';
        datesBox.style.display = 'none';
        textSpace.setAttribute('placeholder', 'Write a note here.');
        textSpace.readOnly = false;
        textSpace.value = '';
        saveButton.style.display = 'inline';
        saveButton.textContent = 'Save the note!';
        editButton.style.display = 'none';
        cancelButton.style.display = 'none';
        pastNotes.style.display = 'block';
        placeNotes();

    }
    function editConf(){
        searchBox.style.display = 'none';
        activityTitle.textContent = 'Edit this note.';
        datesBox.style.display = 'inline';
        textSpace.setAttribute('placeholder', 'Write a new version of the note.');
        textSpace.readOnly = false;
        textSpace.value = 'Add logic to get the note';
        saveButton.style.display = 'none';
        editButton.style.display = 'inline';
        editButton.textContent = 'Save the changes!';
        cancelButton.style.display = 'inline';
        cancelButton.textContent = 'Cancel.'
        pastNotes.style.display = 'none';
        
    }
    function viewConf(){
        searchBox.style.display = 'none';
        activityTitle.textContent = 'Current note.';
        datesBox.style.display = 'inline';
        textSpace.readOnly = true;
        textSpace.value = 'Add logic to get the note';
        saveButton.style.display = 'none';
        editButton.style.display = 'inline';
        editButton.textContent = 'Go back.';
        cancelButton.style.display = 'none';
        pastNotes.style.display = 'none';
        editButton.addEventListener('click', mainConf);
    }

    function placeNotes(){
        pastNotes.innerHTML = '';
        let fragment = document.createDocumentFragment();
                
        for (let i in activeNotes){
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
            let noteData = activeNotes[i];
            p.textContent = noteData['note'].slice(0,10);
            if (noteData['note'].length > 10){
                p.textContent +=  '...';
            }
            let a = document.importNode(div, true);
            fragment.appendChild(a);
        }
        //let temp = document.querySelector('#notes');
        pastNotes.appendChild(fragment);
    }

    function saveNote(){
        //Logic to save the note
        let note = textSpace.value;
        presenter(model).saveNote(note);

    }

    return{ 'main':mainConf,
            'edit':editConf,
            'view':viewConf};
}



/*
//functions
function saveCurrentNote(){
    if (Boolean(textSpace.value)){
        let newIndex = Number(lastIndex) +1;
        let d = new Date();
        let noteData = {'creaDate':d.toString(), 'lastMDate':d.toString(), "note":textSpace.value};
        let strData = JSON.stringify(noteData);
        localStorage.setItem(newIndex, strData);
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
            let noteData = localStorage.getItem(i);
            let parsedData = JSON.parse(noteData);
            p.textContent = parsedData['note'].slice(0,10);
            if (parsedData['note'].length > 10){
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
    lastIndex = indexes[indexes.length-1];
    placeNotes();
}

function editNote(event){
    let dbid = event.getAttribute('dbid');
    let text = localStorage.getItem(dbid);
    let editButton = document.querySelector('.editingbutton');
    let saveButton = document.querySelector('.savingbutton');
    let activity = document.querySelector('.activity');
    let parsedData = JSON.parse(text);
    let creation = document.querySelector('.creation');
    let modified = document.querySelector('.modified');
    let dates = document.querySelector(".hiddates");
    cancelB.style.display = 'inline';
    editButton.style.display = "inline";
    saveButton.style.display = 'none';
    pastNotes.style.display = "none";
    activity.textContent = "Edit this note";
    textSpace.value = parsedData['note'];
    textSpace.setAttribute('placeholder', 'Write a new version for the note');
    creation.textContent = `Creation date: ${parsedData['creaDate']}.`;
    modified.textContent = `Last modification: ${parsedData['lastMDate']}`;
    dates.style.display = 'flex';
    editButton.addEventListener('click', saveEdition, {once : true});
    editButton.parameters = {'editButton':editButton, 'saveButton':saveButton, 'pastNotes':pastNotes,
                              'textSpace':textSpace, 'parsedData':parsedData, 'activity':activity,
                               'dates':dates, 'cancelB':cancelB, 'dbid':dbid  }
}

function saveEdition(evt){
    let parameters = evt.currentTarget.parameters;
    let {editButton, saveButton, pastNotes, textSpace, parsedData, activity, dates, cancelB,
        dbid} = parameters;
    editButton.style.display = "none";
    saveButton.style.display = 'inline';
    pastNotes.style.display = 'block';
    if (Boolean(textSpace.value) && parsedData['note'] !== textSpace.value){
        let d = new Date;
        parsedData['note'] = textSpace.value;
        parsedData['lastMDate'] = d.toString()
        let strData = JSON.stringify(parsedData);
        localStorage.setItem(dbid, strData);
    }
    textSpace.value = '';
    activity.textContent = 'Create a Note';
    textSpace.setAttribute('placeholder', 'Write a note here');
    dates.style.display = 'none';
    cancelB.style.display = 'none';
    placeNotes();
}

function viewNote(event){
    let dbid = event.getAttribute('dbid');
    let editButton = document.querySelector('.editingbutton');
    let saveButton = document.querySelector('.savingbutton');
    let activity = document.querySelector('.activity');
    let dates = document.querySelector(".hiddates");
    let noteData = localStorage.getItem(dbid);
    let parsedData = JSON.parse(noteData);
    let text = parsedData['note'];
    let creation = document.querySelector('.creation');
    let modified = document.querySelector('.modified');
    editButton.style.display = "inline";
    saveButton.style.display = 'none';
    pastNotes.style.display = "none";
    activity.textContent = "Current note";
    textSpace.value = text;
    textSpace.readOnly = true;
    editButton.textContent = 'Go back';
    dates.style.display = 'flex';
    creation.textContent = `Creation date: ${parsedData['creaDate']}.`;
    modified.textContent = `Last modification: ${parsedData['lastMDate']}`;
    editButton.addEventListener('click', ()=>{
        editButton.style.display = "none";
        editButton.textContent = 'Save the changes!';
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

function allowTabs(event){  
    //Source: https://stackoverflow.com/questions/6637341/use-tab-to-indent-in-textarea
    if (event.key == 'Tab') {
        event.preventDefault();
        let start = this.selectionStart;
        let end = this.selectionEnd;
        this.value = this.value.slice(0, start) +  "\t" + this.value.slice(end);
        //To place the cursor in the right character
        this.selectionEnd = start + 1;
    }
}

function cancelEdit(){
    let editButton = document.querySelector('.editingbutton');
    editButton.removeEventListener('click', saveEdition);
    let saveButton = document.querySelector('.savingbutton');
    let activity = document.querySelector('.activity');
    let dates = document.querySelector(".hiddates");
    cancelB.style.display = 'none';
    editButton.style.display = "none";
    editButton.textContent = 'Save the changes!';
    saveButton.style.display = 'inline';
    pastNotes.style.display = 'block';
    textSpace.value = '';
    activity.textContent = 'Create a Note';
    textSpace.setAttribute('placeholder', 'Write a note here');
    textSpace.readOnly = false;
        dates.style.display = 'none';
}

function chooseAction(ev){
    let clicked = ev.target;
    clickedClass = clicked.getAttribute('class');
    switch (clickedClass){
        case "vbutton":
            viewNote(clicked);
        break;
        case "ebutton":
            editNote(clicked);
        break;
        case "dbutton":
            delNote(clicked);
        break;
    }
}*/
