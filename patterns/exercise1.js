'use strict';
//localStorage.clear();


//Model
function Model(){
    function getData(indx='0',active=true){
        if (indx==='0' && active){
            let strData = localStorage.getItem('0');
            let data = JSON.parse(strData);
            let activeNotes = {};
            for (let i in data){
                if (data[i].active && data[i].passFilter){
                    activeNotes[i] = data[i];
                }
            }
            return activeNotes;
        }else if(indx==='0' && !active){
            let strData = localStorage.getItem('0');
            let data = JSON.parse(strData);
            return data;
        }
        let strData = localStorage.getItem('1');
        let commands = JSON.parse(strData);
        return commands;
    }
    function savePreviousConfig(inverse){
        let strCommands = localStorage.getItem('1') || '[]';
        let commands = JSON.parse(strCommands);
        commands.push(inverse);
        let newCommands = JSON.stringify(commands);
        localStorage.setItem('1',newCommands);
    }
    function saveNoteDataBase(obj){
        let strData = localStorage.getItem('0');
        let data = JSON.parse(strData);
        if (data){
            data.push(obj);
        } else {
            data = [obj];
        }
        localStorage.setItem('0', JSON.stringify(data) );
    }
    function updateData(dbid,filter, indx='0'){
        if (indx=='1'){
            let commands = filter['commands'];
            localStorage.setItem('1', JSON.stringify(commands));
            return;
        }
        let strData = localStorage.getItem('0');
        let data = JSON.parse(strData);
        let difNote = [false,''];
        if ('note' in filter){
            if (filter['note'] !== data[dbid]['note']){
                difNote = [true, data[dbid]['note']];
                data[dbid]['note'] = filter['note'];
                data[dbid]['lastMDate'] = filter['lastMDate'].toString();
            }
        }else if('data' in filter){
            data = filter['data'];
        }else{
            for (let key in filter){
                data[dbid][key] = filter[key];
            }
        }
        localStorage.setItem('0', JSON.stringify(data));
        return difNote;
    }

    function updateNotes(data){
        localStorage.setItem('0', JSON.stringify(data) );
    }

    class ModelNote {
        constructor(note) {
            let d = new Date();
            this.createDate = d.toString();
            this.lastMDate = d.toString();
            this.note = note;
            this.active = true;
            this.passFilter = true;
        }
    }
    function modelFactory() {}
    modelFactory.prototype.createNote = function ( note ) {
        return new ModelNote( note );
    };
    var noteFactory = new modelFactory();
    
    function undoAction(){
        let commands = getData('1');
        let data = getData('0',false)
        if (!data){
            return;
        }
        if (commands.length > 0){
            let reverseCommand = commands.pop();
            let dbid = reverseCommand['dbid'] || '';
            switch (reverseCommand['command']) {
                case 'updateNote':
                    let note = reverseCommand['text'];
                    updateNote(note, dbid,true);
                    updateData('-1',{'commands':commands}, '1');
                    break;
                case 'saveNote'://just have to correct this
                    data.pop();
                    updateData('-1',{'data':data}, '0');
                    updateData('-1',{'commands':commands}, '1');
                    break;
                case 'deleteNote':
                    updateData(dbid,{'active':true});
                    updateData('-1',{'commands':commands}, '1');
                    break;
                case 'interchange':
                    interchangeNotes(reverseCommand['start'], reverseCommand['end'], true);
                    updateData('-1',{'commands':commands}, '1');
                    break;
                default:
                    break;
            }
        }
    }

    function deleteNote(dbid){
        updateData(dbid,{'active':false});
        let inverse = {'command':'deleteNote', 'dbid':dbid};
        savePreviousConfig(inverse);
    }

    function saveNote(note){
        let obj = noteFactory.createNote(note);
        if (obj['note']!==''){
            saveNoteDataBase(obj);
            let inverse = {'command':'saveNote'};
            savePreviousConfig(inverse);
        }
    }

    function updateNote(note, dbid,reversing=false){
        if (note ){
            let d = new Date();
            let filter = {'note':note, 'lastMDate':d};
            let difNote = updateData(dbid,filter);
            if (!reversing){
                if(difNote[0]){
                    let inverse = {'dbid':dbid, 'command':'updateNote', 'text':difNote[1]};
                    savePreviousConfig(inverse);
                }
            }
        }
    }
    
    function getDate(dbid, opt){
        let d;
        let data = getData('0',true);
        if (opt==='c'){
            d = data[dbid]['createDate'];
        } else if (opt==='m'){
            d = data[dbid]['lastMDate'];
        }
        return d;
    }

    function filterNotes(filter){
        let data = getData('0',false);
        for (let i in data){
            if (data[i]['note'].includes(filter)){
                data[i]['passFilter'] = true;
            }else{
                data[i]['passFilter'] = false;
            }
        }
        updateNotes(data);
    }

    function interchangeNotes(startingPlace, endingPlace, reversing=false){
        let data = getData('0',false);
        let keepingNote = data[startingPlace];
        data[startingPlace] = data[endingPlace];
        data[endingPlace] = keepingNote;
        if (!reversing){
            let inverse = {'command':'interchange', 'start':endingPlace, 'end':startingPlace};
            savePreviousConfig(inverse);    
        }
        updateNotes(data);
    }
    return {
        'saveNote':saveNote,
        'deleteNote':deleteNote,
        'updateNote':updateNote,
        'getDate':getDate,
        'filterNotes': filterNotes,
        'interchangeNotes':interchangeNotes,
        'undoAction':undoAction,
        'getActiveNotes':getData
    }
}

//Presenter
class Presenter{
    constructor(model){
        this.data = model.activeNotes;
        this.model = model;
    }
    
    saveNote(note){
        this.model.saveNote(note);
        this.data = this.model.getActiveNotes();
    }

    editNote(note, dbid){
        this.model.updateNote(note, dbid);
        this.data = this.model.getActiveNotes();
    }

    deleteNote(dbid){
        this.model.deleteNote(dbid);
        this.data = this.model.getActiveNotes();
    }
    
    

    dates(dbid){
        let creationDate = this.model.getDate(dbid,'c');
        let lastMDate = this.model.getDate(dbid, 'm');
        return {
            'creation': creationDate,
            'modification': lastMDate
        }
    }

    filterNotes(filter){
        this.model.filterNotes(filter);
        this.data = this.model.getActiveNotes();
    }
    
    interchangeNotes(startingPlace, endingPlace){
        model.interchangeNotes(startingPlace, endingPlace);
        this.data = model.getActiveNotes();
    }

    undoAction(){
        model.undoAction();
        this.data = model.getActiveNotes();
    }
}

//View
function View(presenter,pubsub){
    let activityTitle = document.querySelector('.activity');
    let datesBox = document.querySelector('.hiddates');
    let textSpace = document.getElementsByName('textarea')[0];
    let saveButton = document.querySelector('.savingbutton');
    let editButton = document.querySelector('.editingbutton');
    let cancelButton = document.querySelector('.cancelingbutton');
    let pastNotes = document.querySelector('.pastnotes');
    let activeNotes = presenter.data;
    let creationDP = document.querySelector('.creation');
    let lastMDP = document.querySelector('.modified');
    let undoButton = document.querySelector('.undobutton');
    let searchBox = document.querySelector('#searchingbox');
    let draggedNote;

    
    //calling the pub/sub ***************
    var logger = function ( topic, filter ) {
        presenter.filterNotes(filter);
        mainConf();
    };
    var subscription = pubsub.subscribe( "newText", logger );
    function notifyChangeBox(){
        let filter = searchBox.value;
        pubsub.publish( "newText", filter );    
        
    };
    //************************************
    
    function start(){
        pastNotes.addEventListener('click', clickOnNote);
        pastNotes.addEventListener('dragstart',draggingNote);
        pastNotes.addEventListener('dragend',dragEnds);
        pastNotes.addEventListener("dragover", function(event) {
                                    event.preventDefault();
                                    });
        pastNotes.addEventListener("drop", dropNote);
        textSpace.addEventListener('keydown', allowTabs);
        
        searchBox.addEventListener('keyup', notifyChangeBox);
        saveButton.addEventListener('click', saveNote);
        undoButton.addEventListener('click',undoAction);
        document.addEventListener('keydown',checkKeys);
        notifyChangeBox();
        mainConf();
    }

    function clickOnNote(ev){
        let clicked = ev.target;
        let clickedClass = clicked.getAttribute('class');
        switch (clickedClass){
            case "vbutton":
                viewConf(clicked);
            break;
            case "ebutton":
                editConf(clicked);
            break;
            case "dbutton":
                let dbid = clicked.getAttribute('dbid');
                presenter.deleteNote(dbid);
                mainConf();
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
        undoButton.style.display = 'inline-block';
        placeNotes();
        cancelButton.removeEventListener('click', mainConf, {'once':true});
    }

    function editConf(clicked){
        searchBox.style.display = 'none';
        activityTitle.textContent = 'Edit this note.';
        datesBox.style.display = 'inline';
        textSpace.setAttribute('placeholder', 'Write a new version of the note.');
        textSpace.readOnly = false;
        saveButton.style.display = 'none';
        editButton.style.display = 'inline';
        editButton.textContent = 'Save the changes!';
        cancelButton.style.display = 'inline';
        cancelButton.textContent = 'Cancel.';
        undoButton.style.display = 'none';
        pastNotes.style.display = 'none';
        let dbid = clicked.getAttribute('dbid');
        let activeNotes = presenter.data;
        let note = activeNotes[dbid]['note'];
        textSpace.value = note;
        editButton.addEventListener('click', onEditButton, {'once':true});
        let creationDate = presenter.dates(dbid).creation;
        let lastMDate = presenter.dates(dbid).modification;
        creationDP.textContent = `Created: ${creationDate}.`;
        lastMDP.textContent = `Last modification: ${lastMDate}`;
        cancelButton.addEventListener('click', onCancelButton, {'once':true});

        function onCancelButton(){
            editButton.removeEventListener('click', onEditButton, {'once':true});
            editNote(dbid, true).saveEdition();
        }
        function onEditButton(){
            cancelButton.removeEventListener('click',onCancelButton, {'once':true});
            editNote(dbid).saveEdition();
        }

    }
    function editNote(dbid, checkCancel=false){
        return {
            'saveEdition': ()=>{
                let newNote;
                if (checkCancel){
                    let activeNotes = presenter.data;
                    newNote = activeNotes[dbid]['note'];
                }else{
                    newNote = textSpace.value;
                }
                presenter.editNote(newNote, dbid);
                mainConf();
            }
        }
    }

    function viewConf(clicked){
        searchBox.style.display = 'none';
        activityTitle.textContent = 'Current note.';
        datesBox.style.display = 'inline';
        textSpace.readOnly = true;
        saveButton.style.display = 'none';
        editButton.style.display = 'inline';
        editButton.textContent = 'Go back!';
        cancelButton.style.display = 'none';
        pastNotes.style.display = 'none';
        let dbid = clicked.getAttribute('dbid');
        let activeNotes = presenter.data;
        let note = activeNotes[dbid]['note'];
        textSpace.value = note;
        let creationDate = presenter.dates(dbid).creation;
        let lastMDate = presenter.dates(dbid).modification;
        editButton.addEventListener('click', editNote(dbid).saveEdition, {'once':true});
        creationDP.textContent = `Created: ${creationDate}.`;
        lastMDP.textContent = `Last modification: ${lastMDate}`;
        undoButton.style.display = 'none';
    }

    function currentNote(dbid,activeNotes){
        let temp = document.querySelector('#notes');
        let div = temp.content.querySelector('.pastnote');  
        div.setAttribute('dbid',dbid);
        let p = div.querySelector('p');
        p.setAttribute('dbid',dbid);
        let buttons = div.querySelector('.buttons');
        buttons.setAttribute('dbid',dbid);
        let erraseB = buttons.querySelector('.dbutton');
        erraseB.setAttribute('dbid', dbid);
        let editB = buttons.querySelector('.ebutton');
        editB.setAttribute('dbid',dbid);
        let viewB = buttons.querySelector('.vbutton');
        viewB.setAttribute('dbid',dbid);
        let noteData = activeNotes[dbid];
        p.textContent = noteData['note'].slice(0,10);
        if (noteData['note'].length > 10){
            p.textContent +=  '...';
        }
        let a = document.importNode(div, true);
        return a;
    }

    function viewFactory(){
        function createNote(dbid,activeNotes){
            return currentNote(dbid,activeNotes);
        }
        return {'createNote':createNote};
    }

    function placeNotes(){
        pastNotes.innerHTML = '';
        let fragment = document.createDocumentFragment();
        activeNotes = presenter.data;
        for (let i of Object.keys(activeNotes).reverse()){
            let j = parseInt(i);
            let currentNote = viewFactory().createNote(j,activeNotes);
            fragment.appendChild(currentNote);
        }
        pastNotes.appendChild(fragment);
    }

    function saveNote(){
        let note = textSpace.value;
        presenter.saveNote(note);
        mainConf();
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

    function draggingNote(event) {
        draggedNote = event.target;
        draggedNote.style.opacity = 0.3;
    }
    
    function dragEnds(event){
        draggedNote.style.opacity = 1;
    }
    
    function dropNote(event){
        let startingPlace = draggedNote.getAttribute('dbid');
        let endingPlace = event.target.getAttribute('dbid');
        presenter.interchangeNotes(startingPlace, endingPlace);
        mainConf();
    }

    function checkKeys(event){
        if (event.ctrlKey && (event.key === "z" || event.key === "Z")) {
            undoAction();
          }
    }
    
    function undoAction(){
        if (undoButton.style.display !=='none'){
            presenter.undoAction();
            mainConf();
        }
    }
    
    return{ 'main':mainConf,
            'edit':editConf,
            'view':viewConf,
            'start':start
        };
}

//pub/sub pattern**********************************************************************
//Copied from https://addyosmani.com/resources/essentialjsdesignpatterns/book
var pubsub = {};
(function(myObject) {
    // Storage for topics that can be broadcast
    // or listened to
    var topics = {};
    // A topic identifier
    var subUid = -1;
    // Publish or broadcast events of interest
    // with a specific topic name and arguments
    // such as the data to pass along
    myObject.publish = function( topic, args ) {
        if ( !topics[topic] ) {
            return false;
        }
        var subscribers = topics[topic],
            len = subscribers ? subscribers.length : 0;
        while (len--) {
            subscribers[len].func( topic, args );
        }
        return this;
    };
    // Subscribe to events of interest
    // with a specific topic name and a
    // callback function, to be executed
    // when the topic/event is observed
    myObject.subscribe = function( topic, func ) {
        if (!topics[topic]) {
            topics[topic] = [];
        }
        var token = ( ++subUid ).toString();
        topics[topic].push({
            token: token,
            func: func
        });
        return token;
    };
    // Unsubscribe from a specific
    // topic, based on a tokenized reference
    // to the subscription
    myObject.unsubscribe = function( token ) {
        for ( var m in topics ) {
            if ( topics[m] ) {
                for ( var i = 0, j = topics[m].length; i < j; i++ ) {
                    if ( topics[m][i].token === token ) {
                        topics[m].splice( i, 1 );
                        return token;
                    }
                }
            }
        }
        return this;
    };
}( pubsub ));
//*****************************************************************************************

let model = Model();
let presenter = new Presenter(model);
let view = View(presenter, pubsub);
view.start();