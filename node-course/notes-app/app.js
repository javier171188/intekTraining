const getNotes = require('./notes.js')
const chalck = require('chalk')

const msg = getNotes()
console.log(msg)

const greenMsg = chalck.bold.inverse.green('Success!')
console.log(greenMsg)