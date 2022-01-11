'use strict';

function isPalindrome(head) {
    if (!head || !head.next) return true;

    if (!head.next.next) {
        if (head.data === head.next.data) return true;
        return false;
    }

    let firstValues = []
    let fastPointer = head;
    let slowPointer = head;
    let firstValuesSize;

    while (fastPointer.next && fastPointer.next.next) {
        firstValues.push(slowPointer.data);
        fastPointer = fastPointer.next.next;
        slowPointer = slowPointer.next;
    }
    slowPointer = slowPointer.next;
    if (fastPointer.next) {//This means the number of nodes is odd.
        slowPointer = slowPointer.next;
    }

    firstValuesSize = firstValues.length

    for (let i = 0; i < firstValuesSize; i++) {
        if (slowPointer.data !== firstValues[firstValuesSize - 1 - i]) {
            return false;
        }
        slowPointer = slowPointer.next;
    }
    return true;
}

module.exports = { isPalindrome };
