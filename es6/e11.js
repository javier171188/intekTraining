'use strict';
let obj1Con = document.getElementById('obj1');
let obj2Con = document.getElementById('obj2');
let difProps = document.getElementById('dif');

let obj1 = {prop1:1,
            prop2:2,
            prop3:3,
            prop4:4,
            prop6:6

        }

let obj2 = {prop1: 'val1',
            prop2:2,
            prop3:3,
            prop4: 'val4',
            prop5:5
            }

obj1Con.textContent = JSON.stringify(obj1)
obj2Con.textContent = JSON.stringify(obj2)

let difValues = differentValues(obj1,obj2);

difProps.textContent = JSON.stringify(difValues);

function differentValues(obj1,obj2){
    let objDiferent = [];
    for (let key in obj2){
        if (key in obj1){
            if (obj1[key] !== obj2[key]){
                objDiferent.push(key);
            }
        }else{
            objDiferent.push(key);
        }
    }
    for (let key in obj1){
        if (!(key in obj2)){
            objDiferent.push(key);
        }
    }
    return objDiferent;
}


