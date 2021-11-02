'use strict'

const oldObj = {
    name: 'Sara',
    gender: 'Apache Attack Helicopter',
    address: {
        location: {
            city: 'SF',
            state: 'CA'
        },
        preferredLocation: {
            city: 'SF',
            state: ['CA', 'MN']
        },
        other: undefined
    }
};

let flat = flattenImp(oldObj, "oldObj");
console.log(flat);

function flattenFun(oldObject, parentName) {
    let newObject = new Object();

    Object.keys(oldObject).forEach((t) => {
        if (typeof oldObject[t] === 'object' && Object.prototype.toString.call(oldObject[t]) !== '[object Array]') {
            let subOject = flatten(oldObject[t], t);

            Object.keys(subOject).forEach(key => {
                newObject[parentName + '_' + key] = subOject[key];
            })
        } else {
            newObject[parentName + '_' + t] = oldObject[t];
        }
    })
    return newObject;
}

function flattenImp(oldObject, parentName) {
    let newObject = new Object();
    let objElements = { ...oldObj };

    while (Object.keys(objElements).length > 0) {
        console.log('enter')
        for (let t in objElements) {
            if (typeof objElements[t] === 'object' && Object.prototype.toString.call(objElements[t]) !== '[object Array]') {
                for (let key in objElements[t]) {
                    objElements[t + '_' + key] = objElements[t][key];
                    console.log(t, key);
                    console.log(objElements[t + '_' + key]);
                    console.log('-----------------')
                    wait(1000)
                }
            } else {
                newObject[t] = oldObject[t];
            }
            delete objElements[t]
        }
    }
    return newObject;
}
function wait(milliseconds) {
    var start = new Date().getTime();
    let waiting = true;
    while (waiting) {
        if ((new Date().getTime() - start) > milliseconds) {
            waiting = false
        }
    }
}