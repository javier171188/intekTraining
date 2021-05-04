let e = document.getElementsByClassName('exercise')[0];

e.innerHTML += `The given string is: str = "{prop1: 42, myFn: function(a, b) { return a+b+this.prop1;}, 'a':121, b: [1,2], c:'21', d:12}"`;

var str = "{prop1: 42, myFn: function(a, b) { return a+b+this.prop1;}, 'a':121, b: [1,2], c:'21', d:12}";
str = str.replace(/'/g,'"');

function dataParse(str) { return eval(`(${str})`); }
//function dataParse(str) { return new Function(`return ${str}`)() }


e.innerHTML += '<br/> and the object is:  <br/>';
let parsed = dataParse(str);
console.log(parsed);
for (let k in parsed){
    e.innerHTML += `key: ${k}, value: ${parsed[k]} <br/>`;
}
