'use strict'


// localStorage.clear();    
// pub/sub pattern**********************************************************************
// Copied from https://addyosmani.com/resources/essentialjsdesignpatterns/book
const pubsub = {};
(function (myObject) {
    // Storage for topics that can be broadcast
    // or listened to
    const topics = {}
    // A topic identifier
    let subUid = -1
    // Publish or broadcast events of interest
    // with a specific topic name and arguments
    // such as the data to pass along
    myObject.publish = function (topic, args) {
        if (!topics[topic]) {
            return false
        }
        const subscribers = topics[topic]
        let len = subscribers ? subscribers.length : 0
        while (len--) {
            subscribers[len].func(topic, args)
        }
        return this
    }
    // Subscribe to events of interest
    // with a specific topic name and a
    // callback function, to be executed
    // when the topic/event is observed
    myObject.subscribe = function (topic, func) {
        if (!topics[topic]) {
            topics[topic] = []
        }
        const token = (++subUid).toString()
        topics[topic].push({
            token: token,
            func: func
        })
        return token
    }
    // Unsubscribe from a specific
    // topic, based on a tokenized reference
    // to the subscription
    myObject.unsubscribe = function (token) {
        for (const m in topics) {
            if (topics[m]) {
                for (let i = 0, j = topics[m].length; i < j; i++) {
                    if (topics[m][i].token === token) {
                        topics[m].splice(i, 1)
                        return token
                    }
                }
            }
        }
        return this
    }
}(pubsub))

// Model
const model = (function () {
    var modelInstance;
    function init(){
        function readStoreItem(key, fallback = null) {
            const str = localStorage.getItem(key) || fallback;
            return JSON.parse(str);
        }
        // This is more versetail than the pre-existing updateNotes function
        function writeStoreItem(key, value) {
            localStorage.setItem(key, JSON.stringify(value));
        }

        function getData(indx = 'notes', active = true) {
            const data = readStoreItem(indx === 'notes' ? 'notes' : 'backCommands') || []
            if (indx === 'notes' && active) {
                return data
                    .reduce((activeNotes, note, idx) => {
                        if (note.active && note.passFilter) {
                            activeNotes[idx] = note
                        }
                        return activeNotes
                    }, {});
            }
            return data;
        }

        function savePreviousConfig(inverse) {
            const commands = readStoreItem('backCommands', '[]')
            commands.push(inverse)
            writeStoreItem('backCommands', commands)
        }
        function saveNoteDataBase(obj) {
            let data = readStoreItem('notes', '[]')
            data.push(obj)
            writeStoreItem('notes', data);
        }

        function updateData(dbid, filter, indx = 'notes') {
            if (indx === 'backCommands') {
                writeStoreItem('backCommands', filter.commands)
                return
            }
            let data = readStoreItem('notes')
            let difNote = [false, '']
            if ('note' in filter) {
                if (filter.note !== data[dbid].note) {
                    difNote = [true, data[dbid].note]
                    data[dbid].note = filter.note
                    data[dbid].lastMDate = filter.lastMDate.toString()
                }
            } else if ('data' in filter) {
                data = filter.data
            } else {
                for (const key in filter) {
                    data[dbid][key] = filter[key]
                }
            }
            writeStoreItem('notes', data)
            return difNote
        }

        function updateNotes(data) {
            writeStoreItem('notes', data);
        }

        class ModelNote {
            constructor(note) {
                const d = new Date()
                this.createDate = d.toString()
                this.lastMDate = d.toString()
                this.note = note
                this.active = true
                this.passFilter = true
            }
        }
        function ModelFactory() { }
        ModelFactory.prototype.createNote = function (note) {
            return new ModelNote(note)
        }
        const noteFactory = new ModelFactory()
        const UNDO_ACTIONS = {
            updateNote({ command, dbid }) {
                updateNote(command.text, dbid, true)
            },
            saveNote({ data }) {
                data.pop()
                updateData('-1', { data }, 'notes')
            },
            deleteNote({ dbid }) {
                updateData(dbid, { active: true })
            },
            interchange({ command }) {
                interchangeNotes(command.start, command.end, true)
            }
        }

        function undoAction() {
            const commands = getData('backCommands')
            const data = getData('notes', false)
            if (!data) {
                return
            }
            if (commands.length > 0) {
                const reverseCommand = commands.pop()
                let dbid = reverseCommand.dbid || ''
                const undoAction = UNDO_ACTIONS[reverseCommand.command];
                if (undoAction) {
                    undoAction({ command: reverseCommand, dbid, data });
                    updateData('-1', { commands: commands }, 'backCommands')
                }
            }
        }

        function deleteNote(dbid) {
            updateData(dbid, { active: false })
            savePreviousConfig({ command: 'deleteNote', dbid })
        }

        function saveNote(note) {
            const obj = noteFactory.createNote(note)
            if (obj.note !== '') {
                saveNoteDataBase(obj)
                savePreviousConfig({ command: 'saveNote' })
            }
        }

        function updateNote(note, dbid, reversing = false) {
            if (note) {
                const filter = { note, lastMDate: new Date() }
                const [dif, text] = updateData(dbid, filter)
                if (!reversing) {
                    if (dif) {
                        savePreviousConfig({ dbid, command: 'updateNote', text })
                    }
                }
            }
        }

        function getDate(dbid, opt) {
            const data = getData('notes', true)
            return opt === 'c' ?
                data[dbid].createDate :
                data[dbid].lastMDate // opt === m
        }

        function filterNotes(filter) {
            const notes = getData('notes', false)
            for (const n of notes) {
                n.passFilter = n.note.includes(filter)
            }
            updateNotes(notes)
        }

        function interchangeNotes(startingPlace, endingPlace, reversing = false) {
            const data = getData('notes', false)
            const keepingNote = data[startingPlace]
            data[startingPlace] = data[endingPlace]
            data[endingPlace] = keepingNote
            if (!reversing) {
                savePreviousConfig({
                    command: 'interchange',
                    start: endingPlace,
                    end: startingPlace
                })
            }
            updateNotes(data)
        }
        return {
            saveNote,
            deleteNote,
            updateNote,
            getDate,
            filterNotes,
            interchangeNotes,
            undoAction,
            getActiveNotes: getData
        }
    }
    return {
        getInstance: function () {
          if ( !modelInstance ) {
            modelInstance = init();
          }
          return modelInstance;
        }
      };
})().getInstance();

// Presenter
const presenter = (function(pubsub) {
    var presenterInstance;

    function init(){
        let creationDate
        let lastMDate
        pubsub.publish('getDataPresenter', this)

        function saveNote(note) {
            pubsub.publish('saveNotePresenter', note)
            pubsub.publish('getDataPresenter', this)
        }

        function editNote(note, dbid) {
            pubsub.publish('editNotePresenter', [note, dbid])
            pubsub.publish('getDataPresenter', this)
        }

        function deleteNote(dbid) {
            pubsub.publish('deleteNotePresenter', dbid)
            pubsub.publish('getDataPresenter', this)
        }

        function dates(dbid) {
            pubsub.publish('getDatesPresenter', [this, dbid])
            return {
                creation: this.creationDate,
                modification: this.lastMDate
            }
        }

        function filterNotes(filter) {
            pubsub.publish('filterNotesPresenter', filter)
            pubsub.publish('getDataPresenter', this)
        }

        function interchangeNotes(startingPlace, endingPlace) {
            pubsub.publish('interchageNotesPresenter', [startingPlace, endingPlace])
            pubsub.publish('getDataPresenter', this)
        }

        function undoAction() {
            pubsub.publish('undoActionPresenter')
            pubsub.publish('getDataPresenter', this)
        }

        function start() {
            // Subscribing*******************************************************************
            function undoActionModelLoger(topic) {
                model.undoAction()
            }
            pubsub.subscribe('undoActionPresenter', undoActionModelLoger)

            function interchageNotesModelLogger(topic, info) {
                model.interchangeNotes(info[0], info[1])
            }
            pubsub.subscribe('interchageNotesPresenter', interchageNotesModelLogger)

            function filterNotesModelLogger(topic, filter) {
                model.filterNotes(filter)
            }
            pubsub.subscribe('filterNotesPresenter', filterNotesModelLogger)

            function getDatesModelLogger(topic, info) {
                let p = info[0]
                let dbid = info[1]
                p.creationDate = model.getDate(dbid, 'c')
                p.lastMDate = model.getDate(dbid, 'm')
            }
            pubsub.subscribe('getDatesPresenter', getDatesModelLogger)

            function deleteNoteModelLogger(topic, dbid) {
                model.deleteNote(dbid)
            }
            pubsub.subscribe('deleteNotePresenter', deleteNoteModelLogger)

            function editNoteModelLogger(topic, info) {
                model.updateNote(info[0], info[1])
            }
            pubsub.subscribe('editNotePresenter', editNoteModelLogger)

            function saveNoteModelLogger(topic, note) {
                model.saveNote(note)
            }
            pubsub.subscribe('saveNotePresenter', saveNoteModelLogger)

            function interchangeNotesLogger(topic, indexes) {
                presenter.interchangeNotes(indexes[0], indexes[1])
                let activeNotes = presenter.data
                view.main(activeNotes)
            };
            pubsub.subscribe('interchangeNotes', interchangeNotesLogger)

            function textFilterLogger(topic, filter) {
                presenter.filterNotes(filter)
                let activeNotes = presenter.data
                view.main(activeNotes)
            }
            pubsub.subscribe('newText', textFilterLogger)

            function deleteNoteLogger(topic, dbid) {
                presenter.deleteNote(dbid)
                let activeNotes = presenter.data
                view.main(activeNotes)
            }
            pubsub.subscribe('deleteNote', deleteNoteLogger)

            function editNoteLogger(topic, info) {
                presenter.editNote(info[0], info[1])
            }
            pubsub.subscribe('editNote', editNoteLogger)

            function saveNoteLogger(topic, note) {
                presenter.saveNote(note)
                let activeNotes = presenter.data
                view.main(activeNotes)
            }
            pubsub.subscribe('saveNote', saveNoteLogger)

            function undoActionLogger(topic) {
                presenter.undoAction()
                let activeNotes = presenter.data
                view.main(activeNotes)

            }
            pubsub.subscribe('undoAction', undoActionLogger)

            function startAppLogger(topic, activeNotes) {
                view.start(activeNotes);
            }
            pubsub.subscribe('startApp', startAppLogger)

            function editClickedLogger(topic, dbid) {
                let dates = presenter.dates(dbid)
                let activeNotes = presenter.data
                let note = activeNotes[dbid].note
                view.edit(note, dates, dbid)
            }
            pubsub.subscribe('editClicked', editClickedLogger)

            function saveEditClickedLogger(topic, info) {
                let dbid = info[0]
                let checker = info[1]
                let data = presenter.data
                let newNote = data[dbid]['note']
                view.saveEdition(newNote, dbid, data, checker)
            }
            pubsub.subscribe('saveEditClicked', saveEditClickedLogger)

            function viewLogger(topic, dbid) {
                let dates = presenter.dates(dbid)
                let activeNotes = presenter.data
                let note = activeNotes[dbid].note
                view.view(dbid, note, dates)
            }
            pubsub.subscribe('viewClicked', viewLogger)
            //* *****************************************************************************
            pubsub.publish('getDataPresenter', this)
            pubsub.publish('startApp', this.data)
        }

        return{
            start:start,
            filterNotes:filterNotes,
            dates:dates,
            undoAction:undoAction,
            interchangeNotes:interchangeNotes,
            deleteNote:deleteNote,
            editNote:editNote,
            saveNote:saveNote
        }
    }
    return {
        getInstance: function () {
          if ( !presenterInstance ) {
            presenterInstance = init();
          }
          return presenterInstance;
        }
      };
})(pubsub).getInstance();

// View
const view = (function (pubsub) {
    var viewInstance

    function init() {
        const activityTitle = document.querySelector('.activity')
        const datesBox = document.querySelector('.hiddates')
        const textSpace = document.getElementsByName('textarea')[0]
        const saveButton = document.querySelector('.savingbutton')
        const editButton = document.querySelector('.editingbutton')
        const cancelButton = document.querySelector('.cancelingbutton')
        const pastNotes = document.querySelector('.pastnotes')
        const creationDP = document.querySelector('.creation')
        const lastMDP = document.querySelector('.modified')
        const undoButton = document.querySelector('.undobutton')
        const searchBox = document.querySelector('#searchingbox')
        let draggedNote

        function notifyChangeBox() {
            const filter = searchBox.value
            pubsub.publish('newText', filter)
        };

        function start(activeNotes) {
            pastNotes.addEventListener('click', clickOnNote)
            pastNotes.addEventListener('dragstart', draggingNote)
            pastNotes.addEventListener('dragend', dragEnds)
            pastNotes.addEventListener('dragover', function (event) {
                event.preventDefault()
            })
            pastNotes.addEventListener('drop', dropNote)
            textSpace.addEventListener('keydown', allowTabs)
            window.addEventListener('keydown', function (event) {
                if (event.ctrlKey && (event.key === 'z' || event.key === 'Z')){
                    event.preventDefault()
                }
            })

            searchBox.addEventListener('keyup', notifyChangeBox)
            saveButton.addEventListener('click', saveNote)
            undoButton.addEventListener('click', undoAction)
            document.addEventListener('keydown', checkKeys)
            notifyChangeBox(activeNotes)
        }

        function clickOnNote(ev) {
            const clicked = ev.target
            const clickedClass = clicked.getAttribute('class')
            let dbid = clicked.getAttribute('dbid')
            switch (clickedClass) {
                case 'vbutton':
                    pubsub.publish('viewClicked', dbid)
                    break
                case 'ebutton':
                    pubsub.publish('editClicked', dbid)
                    break
                case 'dbutton':
                    pubsub.publish('deleteNote', dbid)
                    break
            }
        }

        function editConf(note, dates, dbid) {
            searchBox.style.display = 'none'
            activityTitle.textContent = 'Edit this note.'
            datesBox.style.display = 'inline'
            textSpace.setAttribute('placeholder', 'Write a new version of the note.')
            textSpace.readOnly = false
            saveButton.style.display = 'none'
            editButton.style.display = 'inline'
            editButton.textContent = 'Save the changes!'
            cancelButton.style.display = 'inline'
            cancelButton.textContent = 'Cancel.'
            undoButton.style.display = 'none'
            pastNotes.style.display = 'none'

            textSpace.value = note
            editButton.addEventListener('click', onEditButton, { once: true })
            const creationDate = dates.creation
            const lastMDate = dates.modification
            creationDP.textContent = `Created: ${creationDate}.`
            lastMDP.textContent = `Last modification: ${lastMDate}`
            cancelButton.addEventListener('click', onCancelButton, { once: true })
            function onCancelButton() {
                editButton.removeEventListener('click', onEditButton, { once: true })
                editNote(dbid, true).saveEdition()
            }
            function onEditButton() {
                cancelButton.removeEventListener('click', onCancelButton, { once: true })
                editNote(dbid).saveEdition()
            }
        }

        function mainConf(activeNotes) {
            searchBox.style.display = 'inline'
            activityTitle.textContent = 'Create a note.'
            datesBox.style.display = 'none'
            textSpace.setAttribute('placeholder', 'Write a note here.')
            textSpace.readOnly = false
            textSpace.value = ''
            saveButton.style.display = 'inline'
            saveButton.textContent = 'Save the note!'
            editButton.style.display = 'none'
            cancelButton.style.display = 'none'
            pastNotes.style.display = 'block'
            undoButton.style.display = 'inline-block'
            placeNotes(activeNotes)
            cancelButton.removeEventListener('click', mainConf, { once: true })
        }

        function editNote(dbid, checkCancel = false) {
            return {
                saveEdition: () => {
                    pubsub.publish('saveEditClicked', [dbid, checkCancel])
                }
            }
        }

        function saveEdition(newNote, dbid, activeNotes, checkCancel) {
            if (!checkCancel) {
                newNote = textSpace.value
            }
            activeNotes[dbid]['note'] = newNote
            pubsub.publish('editNote', [newNote, dbid])
            mainConf(activeNotes)
        }

        function viewConf(dbid, note, dates) {
            searchBox.style.display = 'none'
            activityTitle.textContent = 'Current note.'
            datesBox.style.display = 'inline'
            textSpace.readOnly = true
            saveButton.style.display = 'none'
            editButton.style.display = 'inline'
            editButton.textContent = 'Go back!'
            cancelButton.style.display = 'none'
            pastNotes.style.display = 'none'
            textSpace.value = note
            const creationDate = dates.creation
            const lastMDate = dates.modification
            editButton.addEventListener('click', editNote(dbid).saveEdition, { once: true })
            creationDP.textContent = `Created: ${creationDate}.`
            lastMDP.textContent = `Last modification: ${lastMDate}`
            undoButton.style.display = 'none'
        }

        function currentNote(dbid, activeNotes) {
            const temp = document.querySelector('#notes')
            const div = temp.content.querySelector('.pastnote')
            div.setAttribute('dbid', dbid)
            const p = div.querySelector('p')
            p.setAttribute('dbid', dbid)
            const buttons = div.querySelector('.buttons')
            buttons.setAttribute('dbid', dbid)
            const erraseB = buttons.querySelector('.dbutton')
            erraseB.setAttribute('dbid', dbid)
            const editB = buttons.querySelector('.ebutton')
            editB.setAttribute('dbid', dbid)
            const viewB = buttons.querySelector('.vbutton')
            viewB.setAttribute('dbid', dbid)
            const noteData = activeNotes[dbid]
            p.textContent = noteData.note.slice(0, 10)
            if (noteData.note.length > 10) {
                p.textContent += '...'
            }
            const a = document.importNode(div, true)
            return a
        }

        function viewFactory() {
            function createNote(dbid, activeNotes) {
                return currentNote(dbid, activeNotes)
            }
            return { createNote: createNote }
        }

        function placeNotes(activeNotes) {
            pastNotes.innerHTML = ''
            const fragment = document.createDocumentFragment()
            for (const i of Object.keys(activeNotes).reverse()) {
                const j = parseInt(i)
                const currentNote = viewFactory().createNote(j, activeNotes)
                fragment.appendChild(currentNote)
            }
            pastNotes.appendChild(fragment)
        }

        function saveNote() {
            const note = textSpace.value
            pubsub.publish('saveNote', note)
        }

        function allowTabs(event) {
            // Source: https://stackoverflow.com/questions/6637341/use-tab-to-indent-in-textarea
            if (event.key === 'Tab') {
                event.preventDefault()
                const start = this.selectionStart
                const end = this.selectionEnd
                this.value = this.value.slice(0, start) + '\t' + this.value.slice(end)
                // To place the cursor in the right character
                this.selectionEnd = start + 1
            }
        }

        function draggingNote(event) {
            draggedNote = event.target
            draggedNote.style.opacity = 0.3
        }

        function dragEnds(event) {
            draggedNote.style.opacity = 1
        }

        function dropNote(event) {
            const startingPlace = draggedNote.getAttribute('dbid')
            const endingPlace = event.target.getAttribute('dbid')
            pubsub.publish('interchangeNotes', [startingPlace, endingPlace])
        }

        function checkKeys(event) {
            if (event.ctrlKey && (event.key === 'z' || event.key === 'Z')) {
                undoAction()
            }
        }

        function undoAction() {
            if (undoButton.style.display !== 'none') {
                pubsub.publish('undoAction')

            }
        }

        return {
            main: mainConf,
            edit: editConf,
            view: viewConf,
            start: start,
            saveEdition: saveEdition
        }
    }
    return {
        getInstance: function () {
          viewInstance = init();
          return viewInstance;
        }
      };
})(pubsub).getInstance();


//* ****************************************************************************************

window.addEventListener('load', function () {
    //Get Data from model***********
    function getDataModelLogger(topic, p) {
        p.data = model.getActiveNotes('notes', true)
    }
    pubsub.subscribe('getDataPresenter', getDataModelLogger)
    //******************************
    
    presenter.start()
})();