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

let flat = flattenFun(oldObj, "oldObj");
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
