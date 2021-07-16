const fs = require('fs');
const through = require('through2');
let data = '';

/* Create a read stream here*/
const readPoemStream = fs.createReadStream('streams/on-joy-and-sorrow-emoji.txt'); 

readPoemStream.setEncoding('UTF8'); 

readPoemStream.on('data', function(chunk) {
    //data += chunk.toString().replace(':)', 'joy').replace(':(', 'sorrow')
    data += chunk.substring(4);
    
    
 });
 
 readPoemStream.on('end',function() {
    console.log( data);
 });

/* Create a write stream here
const writePoemStream =
*/

/* EXTENSION: Create a transform stream (modify the read stream before piping to write stream)
const transformStream = ???
readPoemStream.pipe(transformStream).pipe(writePoemStream)
*/