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

    parents = [...parents].filter((p) => {
        let children = p.querySelectorAll(childrenSelector);
        return children.length > 0;
    })

    return parents;
}

module.exports = { querySelectorAll };