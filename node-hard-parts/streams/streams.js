const fs = require('fs');
const through = require('through2');
let data = '';

/* Create a read stream here*/
const readPoemStream = fs.createReadStream('streams/on-joy-and-sorrow-emoji.txt'); 

/* Create a write stream here*/
const writePoemStream = fs.createWriteStream('on-joy-and-sorrow-fixed.txt');


const transformStream = through(function (chunk, enc, next){
   chunk = chunk.toString().replaceAll(':)', 'joy').replaceAll(':(','sorrow');
   this.push(chunk);
   next();
})
readPoemStream.pipe(transformStream).pipe(writePoemStream);


// For old node versions
String.prototype.replaceAll = function(oldStr, newStr){
   let replacedStr =  this;
   while (replacedStr.includes(oldStr)){
      replacedStr = replacedStr.replace(oldStr, newStr);
   }
   return replacedStr;
}