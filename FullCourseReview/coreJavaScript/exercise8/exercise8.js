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

let flat = flatten(oldObj, "oldObj");
console.log(flat);

function flatten(oldObject, parentName) {
    let newObject = new Object();

    for (let t in oldObject) {
        if (typeof oldObject[t] === 'object' && Object.prototype.toString.call(oldObject[t]) !== '[object Array]') {
            let subOject = flatten(oldObject[t], t);
            for (let key in subOject) {
                newObject[parentName + '_' + key] = subOject[key];
            }
        } else {
            newObject[parentName + '_' + t] = oldObject[t];
        }
    }
    return newObject;
}
