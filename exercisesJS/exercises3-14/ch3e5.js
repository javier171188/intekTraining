let e = document.getElementsByClassName('exercise')[0];

function printObjProp (obj,parameter=false){
    let props = Object.getOwnPropertyNames(obj);
    if (!parameter){
        for (p of Object.getOwnPropertyNames(obj.__proto__)){
            if (p !== 'constructor'){
                props.push(p);
            }
        }
    }
    return props;
}

function CustomObject (a, b) {
    this.a = a;
    this.b = b;
}
CustomObject.prototype.c = function () { return this.a + this.b; };
var obj = new CustomObject (1, 2);

e.innerHTML = 'var obj = new CustomObject (1, 2); <br/><br/>';
e.innerHTML += `printObjProp (obj):   ${printObjProp (obj)}<br/>`;
e.innerHTML += `printObjProp (obj, false):   ${printObjProp (obj, false)}<br/>`;
e.innerHTML += `printObjProp (obj, true):   ${printObjProp (obj,true)}<br/>`;

		printObjProp (obj); // output: a, b, c
		printObjProp (obj, false); // output: a, b, c
		printObjProp (obj, true); // output: a, b


console.log(printObjProp(obj));
console.log(printObjProp(obj, true));