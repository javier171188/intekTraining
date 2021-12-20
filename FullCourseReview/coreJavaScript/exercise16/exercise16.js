'use strict';
//https://www.geeksforgeeks.org/find-first-node-of-loop-in-a-linked-list/

function findLoopNode(head) {
    if (!head || !head.next || !head.next.next) {
        return null;
    }

    let slow = head;
    let fast = head;

    while (fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            break;
        }
    }
    if (!fast.next) return null
    slow = head;
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }
    return fast;
}

module.exports = { findLoopNode };