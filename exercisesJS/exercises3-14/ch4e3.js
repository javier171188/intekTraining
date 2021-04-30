let e = document.getElementsByClassName('exercise')[0];

let value = 'hello';
let _value = typeof value === 'number' ? value : 0;

class CustomObject {
    constructor(value) {
        let _value = typeof value === 'number' ? value : 0;
        Object.defineProperty(this, 'n', {
            enumerable: true,
            get() { return _value },
            set(value) { _value = typeof value === 'number' ? value : _value; }
        })
    }
}



let custom = new CustomObject();
custom.n = 'a';
e.innerHTML = 'let custom = new CustomObject(); <br/>';
e.innerHTML += "custom.n = 'a'; <br/>";
e.innerHTML += `custom.n: ${custom.n} <br/>`;
custom.n = 1;
e.innerHTML += 'custom.n = 1; <br/>';
e.innerHTML += `custom.n: ${custom.n} <br/>`;
e.innerHTML += '<br/>';

let custom2= new CustomObject(3);
e.innerHTML += 'let custom2 = new CustomObject(3); <br/>';
e.innerHTML += `custom2.n: ${custom2.n} <br/>`;
custom2.n = [1,2,10];
e.innerHTML += 'custom2.n = [1,2,10]; <br/>';
e.innerHTML += `custom2.n: ${custom2.n} <br/>`;
custom2.n = 10;
e.innerHTML += 'custom2.n = 10; <br/>';
e.innerHTML += `custom2.n: ${custom2.n} <br/>`;