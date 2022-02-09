'use strict';

function querySelectorAll(selector) {
    if (!selector) {
        return [];
    }

    const [parentSelector, childrenSelector] = selector.split('<');

    let parents = document.querySelectorAll(parentSelector);
    if (!childrenSelector) return [...parents];

    parents = [...parents].filter((p) => {
        let currentChildren = p.querySelectorAll(`:scope > ${childrenSelector}`);
        return currentChildren.length > 0;
    })

    return parents;
}


module.exports = { querySelectorAll };