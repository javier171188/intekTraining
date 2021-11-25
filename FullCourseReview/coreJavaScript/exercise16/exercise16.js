'use strict';

class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

var head = new Node(0);
head.next = new Node(1);
head.next.next = new Node(2);
head.next.next.next = new Node(3);
head.next.next.next.next = head.next;
let temp = head;
/*while (temp.next) {
    console.log(temp.data);
    temp = temp.next
}*/



console.log(findLoopNode(head) === head.next)

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