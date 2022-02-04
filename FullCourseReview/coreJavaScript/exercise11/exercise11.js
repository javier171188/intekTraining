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

    // let normalSelector = selector.replace('<', '>');
    // let children = querySelectorAll(normalSelector);

    // parents = [...parents].filter((p) => {
    //     let currentChildren = p.querySelectorAll(childrenSelector);

    //     for (let child of children) {
    //         if ([...currentChildren].includes(child)) return true;
    //     }

    //     return false;
    // })

    return parents;
}

module.exports = { querySelectorAll };