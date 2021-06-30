const fs = require('fs')
const chalck = require('chalk')


const addNote = (title, body) =>{
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title )

    if (!duplicateNote){
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

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    
    if (note){
        console.log(chalck.blue.inverse(note.title))
        console.log(chalck.blue(note.body))
    } else {
        console.log(chalck.red('Note not found.'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const remainingNotes = notes.filter((note) => note.title !== title )
    if (notes.length === remainingNotes.length){
        console.log(chalck.red.inverse('No note found!'))
    } else {
        saveNotes(remainingNotes)
        console.log(chalck.green.inverse('Note removed'))
    }

}

const listNotes = () => {
    console.log(chalck.blue.inverse('Your notes: '))
    const notes = loadNotes()
    notes.forEach(note => {
        console.log(chalck.blue(note.title))
    });
}



module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}