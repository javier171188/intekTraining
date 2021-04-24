let e = document.getElementsByClassName('exercise')[0];

e.innerHTML += `The given string is: str = "{prop1: 42, myFn: function(a, b) { return a+b+this.prop1;}, 'a':121, b: [1,2], c:'21', d:12}"`;

var str = "{prop1: 42, myFn: function(a, b) { return a+b+this.prop1;}, 'a':121, b: [1,2], c:'21', d:12}";
str = str.replace(/'/g,'"');

function dataParse(str){
    //cleaning the keys
    let exp = /(,|{)[^'"\]\}]+?:/g;
    let keys = str.match(exp);
    let index;
    let lenW;
    let cleanKeys = keys.map((s)=>{return s.slice(1, s.length-1)});
    cleanKeys = cleanKeys.map((s)=> {return s.replace(/ /g, "")});
    for (let i in keys){
        index = str.indexOf(keys[i]);
        lenW = keys[i].length;
        str = str.slice(0,index+1) +'"'+ cleanKeys[i] +'"' + str.slice(index + lenW-1);
    }
    //cleaning the values
    let values = str.split(':');
    values = values.slice(1);
    for (var i = 0; i<values.length-1;i++){
        values[i] = values[i].slice(0, values[i].lastIndexOf(',')+1);
    }
    values[i] = values[i].slice(0, values[i].lastIndexOf('}')+1)
    values = values.map((v)=>{return v.replace(' ','')});
    for (v of values){
        if (v.indexOf('"')<0){
            index = str.indexOf(v);
            lenW = v.length;
            str = str.slice(0,index) +'"'+ v.slice(0,v.length-1) +'"' + str.slice(index + lenW-1);
        }
        
    }
    let obj = JSON.parse(str);
    for (k in obj){
        if (obj[k].indexOf('function')>=0 ){
            obj[k] = eval("(" + obj[k] + ")");
        }else if (obj[k].indexOf('[')>=0){
            obj[k] = eval(obj[k]);
        }
    }
    return obj;
}
e.innerHTML += '<br/> and the object is:  <br/>';
let parsed = dataParse(str);
console.log(parsed);
for (let k in parsed){
    e.innerHTML += `key: ${k}, value: ${parsed[k]} <br/>`;
}
