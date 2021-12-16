'use strict';

function flattenFun(oldObject, parentName) {
    let newObject = Object.keys(oldObject).reduce((withNewKeys, t) => {
        if (typeof oldObject[t] === 'object' && Object.prototype.toString.call(oldObject[t]) !== '[object Array]') {
            let subObject = flattenFun(oldObject[t], t);

            let withParentName = Object.keys(subObject).reduce((innerObj, key) => {
                innerObj[`${parentName}_${key}`] = subObject[key];
                return innerObj;
            }, {})

            Object.assign(withNewKeys, withParentName);

        } else {
            withNewKeys[`${parentName}_${t}`] = oldObject[t];
        }
        return withNewKeys;
    }, {})
    return newObject;
}

function flattenImp(oldObj, parentName) {
    let newObject = {};
    let objElements = { ...oldObj };

    for (let n in objElements) {
        objElements[`${parentName}_${n}`] = objElements[n];
        delete objElements[n];
    }

    while (Object.keys(objElements).length > 0) {
        for (let t in objElements) {
            if (typeof objElements[t] === 'object' && Object.prototype.toString.call(objElements[t]) !== '[object Array]') {
                for (let key in objElements[t]) {
                    objElements[`${t}_${key}`] = typeof objElements[t][key] === 'object' && Object.prototype.toString.call(objElements[t][key]) !== '[object Array]' ?
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

module.exports = {
    flattenFun,
    flattenImp
};