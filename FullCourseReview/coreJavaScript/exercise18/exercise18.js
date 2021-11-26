'use strict';

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

module.exports = { set };