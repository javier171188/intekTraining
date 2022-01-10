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
        let currentChildren = p.children;

        for (let child of children) {
            if ([...currentChildren].includes(child)) return true;
        }

        return false;
    })

    return parents;
}

module.exports = { querySelectorAll };