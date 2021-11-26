'use strict';

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

module.exports = { isPalindrome };