'use strict';
class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

function createLinkedList(valuesArray, loopPosition = null) {
    if (valuesArray.length < 1) return null;
    let head = new Node(valuesArray[0]);
    let temp = head;
    let loopNode;
    if (loopPosition === 0) {
        loopNode = head;
    }
    for (let i = 1; i < valuesArray.length; i++) {
        temp.next = new Node(valuesArray[i]);
        temp = temp.next;
        if (loopPosition === i) {
            loopNode = temp;
        }
    }
    if (typeof loopPosition === 'number') {
        temp.next = loopNode;
    }
    return head;
}

module.exports = { Node, createLinkedList };