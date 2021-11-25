'use strict';

function findLoopNode(head) {
    if (!head.next) {
        return null;
    }
    let nodes = new Set();
    nodes.add(head)
    let temp = head.next;
    while (temp.next) {
        if (nodes.has(temp)) {
            return temp;
        }
        nodes.add(temp)
        temp = temp.next;
    }
    return null;
}

module.exports = { findLoopNode };