'use strict';
const { isPalindrome } = require('./exercise17');
const { createLinkedList } = require('./exercise17Utils');

test('Basic tests', () => {
    let head = createLinkedList([1, 2, 3, 4, 5, 4, 3, 2, 1]);
    let palindromeBool = isPalindrome(head);
    expect(palindromeBool).toBe(true);

    head = createLinkedList([1, 2, 3, 4, 4, 3, 2, 1]);
    palindromeBool = isPalindrome(head);
    expect(palindromeBool).toBe(true);

    head = createLinkedList([0, 1, 2, 3, 4, 4, 3, 2, 1]);
    palindromeBool = isPalindrome(head);
    expect(palindromeBool).toBe(false);

    head = createLinkedList([1, 2, 3, 4, 5, 4, 3, 2, 1, 0]);
    palindromeBool = isPalindrome(head);
    expect(palindromeBool).toBe(false);
})

test('Small lists', () => {
    let head = createLinkedList(['A']);
    let palindromeBool = isPalindrome(head);
    expect(palindromeBool).toBe(true);

    head = createLinkedList(['A', 'A']);
    palindromeBool = isPalindrome(head);
    expect(palindromeBool).toBe(true);

    head = createLinkedList(['A', 'B', 'A']);
    palindromeBool = isPalindrome(head);
    expect(palindromeBool).toBe(true);

    head = createLinkedList(['A', 'C']);
    palindromeBool = isPalindrome(head);
    expect(palindromeBool).toBe(false);

    head = createLinkedList([]);
    palindromeBool = isPalindrome(head);
    expect(palindromeBool).toBe(true);
})

