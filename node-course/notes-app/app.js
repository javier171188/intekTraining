const notes = require('./notes.js')
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
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    'command': 'remove',
    'describe': 'Remove  note',
    'builder': {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        notes.removeNote(argv.title)
    }
})

// Create list command
yargs.command({
    'command': 'list',
    'describe': 'List the notes',
    handler() {
        notes.listNotes()
    }
})

// Create read command
yargs.command({
    'command': 'read',
    'describe': 'Reading the note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

// add, remove, read, list

yargs.parse()
