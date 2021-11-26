'use strict';
const { set } = require('./exercise18');

let obj = {
    path: {
        to: {},
        otherKey: ''
    },
    moreKeys: {}
}

set(obj, 'path.to.deeply.nested.property', 42);
console.log(obj.path.to);