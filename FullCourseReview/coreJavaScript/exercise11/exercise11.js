'use strict';

function querySelectorAll(selector) {
    if (!selector) {
        return [];
    }
    while (selector.includes(' ')) {
        selector = selector.replace(' ', '');
    }
    const [parentSelector, childrenSelector] = selector.split('<');

    let parents = document.querySelectorAll(parentSelector);
    if (!childrenSelector) return [...parents];

    let children = document.querySelectorAll(childrenSelector);

    parents = [...parents].filter((p) => {
        //let children = p.querySelectorAll(childrenSelector);
        //return children.length > 0;

        for (let child of children) {
            if (child === p) return true;
        }

        return false;
    })

    return parents;
}

module.exports = { querySelectorAll };