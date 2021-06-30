const fs = require('fs')
const chalck = require('chalk')

function getNotes(){
    return "Your notes..."
}

const addNote = function (title, body){
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note){
        return note.title === title
    })

    if (duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalck.green.inverse('New note added!'))
    } else{
        console.log(chalck.red.inverse('Note title taken!'))
    }
   
    
}

const saveNotes = function (notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const removeNote = function(title) {
    const notes = loadNotes()
    const remainingNotes = notes.filter(function (note){
        return note.title !== title
    })
    if (notes.length === remainingNotes.length){
        console.log(chalck.red.inverse('No note found!'))
    } else {
        saveNotes(remainingNotes)
        console.log(chalck.blue.inverse('Note removed'))
    }

}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}