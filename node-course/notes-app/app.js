const getNotes = require('./notes.js')
const yargs = require('yargs')
const chalck = require('chalk')

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    'command': 'add',
    'describe': 'Add a new note',
    'builder': {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log(`Title: ${argv.title}`)
        console.log(`Body: ${argv.body}`)
    }
})

// Create remove command
yargs.command({
    'command': 'remove',
    'describe': 'Remove  note',
    handler: function () {
        console.log('Removing the note')
    }
})

// Create list command
yargs.command({
    'command': 'list',
    'describe': 'List the notes',
    handler: function(){
        console.log('Listing out all notes')
    }
})

// Create read command
yargs.command({
    'command': 'read',
    'describe': 'Reading the note',
    handler: function(){
        console.log('Reading the note')
    }
})

// add, remove, read, list

yargs.parse()
