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
console.log('result: ', flat);

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

function flattenImp(oldObj, parentName) {
    let newObject = new Object();
    let objElements = { ...oldObj };

    for (let n in objElements) {
        objElements[parentName + '_' + n] = objElements[n];
        delete objElements[n];
    }

    while (Object.keys(objElements).length > 0) {
        for (let t in objElements) {
            if (typeof objElements[t] === 'object' && Object.prototype.toString.call(objElements[t]) !== '[object Array]') {
                for (let key in objElements[t]) {
                    objElements[t + '_' + key] = typeof objElements[t][key] === 'object' && Object.prototype.toString.call(objElements[t][key]) !== '[object Array]' ?
                        { ...objElements[t][key] } :
                        objElements[t][key];
                }
            } else {
                newObject[t] = objElements[t];
            }
            delete objElements[t];
        }
    }
    return newObject;
}
