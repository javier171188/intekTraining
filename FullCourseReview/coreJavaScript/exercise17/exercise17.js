'use strict';

function getNthValue(head, n) {
    let temp = head;
    for (let i = 0; i < n; i++) {
        temp = temp.next;
    }
    return temp.data;
}

function isPalindrome(head) {
    if (!head || !head.next) return true;
    let numberNodes = 0;
    let temp = head;
    while (temp.next) {
        numberNodes += 1;
        temp = temp.next;
    }

    temp = head;
    for (let n = numberNodes; numberNodes / 2 < n; n--) {
        if (temp.data !== getNthValue(head, n)) return false
        temp = temp.next;
    }
    return true
}

module.exports = { isPalindrome };