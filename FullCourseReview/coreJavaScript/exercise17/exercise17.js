'use strict';

const { Node, createLinkedList } = require('./exercise17Utils');

let head = createLinkedList([1, 2, 3, 4, 5, 4, 3, 2, 1])

console.log(isPalindrome(head));

function isPalindrome(head) {
    if (!head.next) return true;
    let values = [head.data];
    let temp = head;
    while (temp.next) {
        temp = temp.next;
        values.push(temp.data)
    }
    for (let i = 0; i < values.length / 2; i++) {
        if (values[i] !== values[values.length - i - 1]) {
            return false;
        };
    }
    return true;
}