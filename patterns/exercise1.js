//localStorage.clear();

view(presenter).start();

//Model
function model(){
    let strData = localStorage.getItem('0');
    let data = JSON.parse(strData);

    let activeNotes = {};
    for (let i in data){
        if (data[i].active && data[i].passFilter){
            activeNotes[i] = data[i];
        }
    }

    function modelNote(note){
        let d = new Date();
        this.createDate = d.toString();
        this.lastMDate = d.toString();
        this.note = note;
        this.active = true;
        this.passFilter = true;
    }
    function modelFactory() {}
    modelFactory.prototype.createNote = function ( note ) {
        this.noteClass = modelNote;
        return new this.noteClass( note );
    };
    var noteFactory = new modelFactory();
    
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
        
        obj = noteFactory.createNote(note);
        
        if (obj['note']!==''){
            if (data){
                data[strIndex] = obj;
            } else {
                data = {'1':obj};
            }
        }
        updateNotes(data);
    }

    function updateNotes(data){
        localStorage.setItem('0', JSON.stringify(data) );
        presenter(()=>{
                        return {'data': data}
                      }).setConfig('main');
    }

    function updateNote(note, dbid){
        if (note){
            if (data[dbid]['note'] !== note){
                let d = new Date();
                data[dbid]['lastMDate'] = d.toString();
                data[dbid]['note'] = note;
            }
            localStorage.setItem('0', JSON.stringify(data) );
            presenter(()=>{
                    return {'data': data}
                    }).setConfig('main');
        }
    }

    function deleteNote(dbid){
        data[dbid]['active'] = false;
        localStorage.setItem('0', JSON.stringify(data) );
        presenter(()=>{
            return {'data': data}
            }).setConfig('main');
    }

    function getDate(dbid, opt){
        let d;
        if (opt==='c'){
            d = data[dbid]['createDate'];
        } else if (opt==='m'){
            d = data[dbid]['lastMDate'];
        }
        return d;
    }

    function filterNotes(filter){
        for (let i in data){
            if (data[i]['note'].includes(filter)){
                data[i]['passFilter'] = true;
            }else{
                data[i]['passFilter'] = false;
            }
        }
        model().updateNotes(data);
    }

    function interchangeNotes(startingPlace, endingPlace){
        let keepingNote = data[startingPlace];
        data[startingPlace] = data[endingPlace];
        data[endingPlace] = keepingNote;
        model().updateNotes(data);
    }

    return {
        'data': data,
        'saveNote':saveNote,
        'updateNotes': updateNotes,
        'activeNotes': activeNotes,
        'deleteNote':deleteNote,
        'updateNote':updateNote,
        'getDate':getDate,
        'filterNotes': filterNotes,
        'interchangeNotes':interchangeNotes
    }
}

//Presenter
function presenter(model){
    let activeNotes = model().activeNotes;
    
    function saveNote(note){
        model().saveNote(note);
    }

    function editNote(note, dbid){
        model().updateNote(note, dbid);
    }

    function deleteNote(dbid){
        model().deleteNote(dbid);
    }
    
    function setConfig(option){
        switch(option){
            case "main":
                view(presenter).main();
            break;
            case 'edit':
                view(presenter).edit();
            break;
            case 'view':
                view(presenter).view();
            break;
            default:
                console.log(`The option ${option} was sent as a configuration`);
                view(presenter).main();
        }
    }

    function dates(dbid){
        let creationDate = model().getDate(dbid,'c');
        let lastMDate = model().getDate(dbid, 'm');
        return {
            'creation': creationDate,
            'modification': lastMDate
        }
    }

    function filterNotes(filter){
        model().filterNotes(filter);
    }
    
    function interchangeNotes(startingPlace, endingPlace){
        model().interchangeNotes(startingPlace, endingPlace);
    }

    return {
        'data':activeNotes,
        'saveNote': saveNote,
        'deleteNote': deleteNote,
        'setConfig': setConfig,
        'editNote': editNote,
        'dates': dates,
        'filterNotes': filterNotes,
        'interchangeNotes':interchangeNotes
    }
}

//View
function view(presenter){
    let activityTitle = document.querySelector('.activity');
    let datesBox = document.querySelector('.hiddates');
    let textSpace = document.getElementsByName('textarea')[0];
    let saveButton = document.querySelector('.savingbutton');
    let editButton = document.querySelector('.editingbutton');
    let cancelButton = document.querySelector('.cancelingbutton');
    let pastNotes = document.querySelector('.pastnotes');
    let activeNotes = presenter(model)['data'];
    let creationDP = document.querySelector('.creation');
    let lastMDP = document.querySelector('.modified');
    let dragedNote;

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
    var logger = function ( topic, filter ) {
        presenter(model).filterNotes(filter);
    };
    var subscription = pubsub.subscribe( "newText", logger );
    function notifyChangeBox(){
        let filter = searchBox.value;
        pubsub.publish( "newText", filter );    
    }
    //*****************************************************************************************

    function start(){
        pastNotes.addEventListener('click', clickOnNote);
        //console.log('event listener to notes added.');
        pastNotes.addEventListener('dragstart',draggingNote);
        pastNotes.addEventListener('dragend',dragEnds);
        pastNotes.addEventListener("dragover", function(event) {
                                    event.preventDefault();
                                    });
        pastNotes.addEventListener("drop", dropNote);
        textSpace.addEventListener('keydown', allowTabs);
        searchBox = document.querySelector('#searchingbox');
        searchBox.addEventListener('keyup', notifyChangeBox);
        saveButton.addEventListener('click', saveNote);
        //console.log('event listener to save button added');
        //pastNotesObj = pastNotes;
        view(presenter).main();
    }

    function clickOnNote(ev){
        let clicked = ev.target;
        clickedClass = clicked.getAttribute('class');
        switch (clickedClass){
            case "vbutton":
                //viewNote(clicked);
                viewConf(clicked);
            break;
            case "ebutton":
                //editNote(clicked);
                editConf(clicked);
            break;
            case "dbutton":
                //delNote(clicked);
                let dbid = clicked.getAttribute('dbid');
                presenter(model).deleteNote(dbid);
            break;
        }
    }

    function mainConf(){
        console.log('creating the main page');
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
        cancelButton.textContent = 'Cancel.'
        pastNotes.style.display = 'none';
        let dbid = clicked.getAttribute('dbid');
        let activeNotes = presenter(model).data;
        let note = activeNotes[dbid]['note'];
        textSpace.value = note;
        editButton.addEventListener('click', onEditButton, {'once':true});
        //console.log('event listener to editButton added');
        let creationDate = presenter(model).dates(dbid).creation;
        let lastMDate = presenter(model).dates(dbid).modification;
        creationDP.textContent = `Created: ${creationDate}.`;
        lastMDP.textContent = `Last modification: ${lastMDate}`;
        cancelButton.addEventListener('click', onCancelButton, {'once':true});
        //console.log('event listener to cancel button added');

        function onCancelButton(){
            editButton.removeEventListener('click', onEditButton, {'once':true});
            editNote(dbid, true).saveEdition();
            mainConf();
        }
        function onEditButton(){
            cancelButton.removeEventListener('click',onCancelButton, {'once':true});
            editNote(dbid).saveEdition();
            mainConf();
        }

    }
    function editNote(dbid, checkCancel=false){
        return {
            'saveEdition': ()=>{
                let newNote;
                if (checkCancel){
                    let activeNotes = presenter(model)['data'];
                    newNote = activeNotes[dbid]['note'];
                }else{
                    newNote = textSpace.value;
                    //console.log('Saving the content of the text area');
                }
                presenter(model).editNote(newNote, dbid);
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
        let activeNotes = presenter(model).data;
        let note = activeNotes[dbid]['note'];
        textSpace.value = note;
        let creationDate = presenter(model).dates(dbid).creation;
        let lastMDate = presenter(model).dates(dbid).modification;
        editButton.addEventListener('click', editNote(dbid).saveEdition, {'once':true});
        creationDP.textContent = `Created: ${creationDate}.`;
        lastMDP.textContent = `Last modification: ${lastMDate}`;
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
        //console.log('creating notes');
        pastNotes.innerHTML = '';
        let fragment = document.createDocumentFragment();
        activeNotes = presenter(model)['data'];      
        for (let i of Object.keys(activeNotes).reverse()){
            let j = parseInt(i);
            let currentNote = viewFactory().createNote(j,activeNotes);
            fragment.appendChild(currentNote);
        }
        pastNotes.appendChild(fragment);
    }

    function saveNote(){
        let note = textSpace.value;
        presenter(model).saveNote(note);
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
        //event.dataTransfer.setData('text/plain', event.target.id);
        //event.currentTarget.style.backgroundColor = 'yellow';
        draggedNote = event.target;
        //draggedNote.style.display = 'none';
        draggedNote.style.opacity = 0.3;
        //console.log(draggedNote);
    }
    
    function dragEnds(event){
        //draggedNote = event.target;
        draggedNote.style.opacity = 1;
    }
    
    function dropNote(event){
        //event.preventDefault();
        let startingPlace = draggedNote.getAttribute('dbid');
        let endingPlace = event.target.getAttribute('dbid');
        presenter(model).interchangeNotes(startingPlace, endingPlace);
    }

    return{ 'main':mainConf,
            'edit':editConf,
            'view':viewConf,
            'start':start
        };
}

