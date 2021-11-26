'use strict';

let obj = {
    path: {
        to: {},
        otherKey: ''
    },
    moreKeys: {}
}

set(obj, 'path.to.deeply.nested.property', 42);
console.log(obj.path.to);
function set(obj, path, value) {

    let keys = path.split('.');
    let temp = obj;
    for (let i = 0; i < keys.length; i++) {
        if (Object.keys(temp).includes(keys[i])) {
            if (typeof temp === 'object') {
                if (i === keys.length - 1) {
                    temp[keys[i]] = value;
                } else {
                    temp[keys[i]] = {};
                }
                temp = temp[keys[i]];
            } else {
                throw new Error('One of the keys already exists');
            }
        } else {
            if (i === keys.length - 1) {
                temp[keys[i]] = value;
            } else {
                temp[keys[i]] = {};
            }
            temp = temp[keys[i]];
        }
    }
    return obj;
}
