'use strict';
const { findLoopNode } = require('./exercise16');
const { Node, createLinkedList } = require('./exercise16Utils')

test('Basic test', () => {
    let head = createLinkedList([1, 2, 2, 3, 3, 6, 7, 2, 1], 3);
    let loopNode = findLoopNode(head);
    expect(loopNode).toBe(head.next.next.next);
})

test('No linked list', () => {
    let head = createLinkedList([1, 2, 2, 3, 3, 6, 7, 2, 1]);
    let loopNode = findLoopNode(head);
    expect(loopNode).toBe(null);
})

test('Limit cases', () => {
    let head = createLinkedList([1, 2, 2, 3, 3, 6, 7, 2, 1], 0);
    let loopNode = findLoopNode(head);
    expect(loopNode).toBe(head);

    head = createLinkedList([1, 2, 2, 3, 3, 6, 7, 2, 1], 8);
    loopNode = findLoopNode(head);
    expect(loopNode).toBe(head.next.next.next.next.next.next.next.next);
})

test('Small lists', () => {
    let head = new Node(1);

    let loopNode = findLoopNode(head);
    expect(loopNode).toBe(null);

    head.next = head;
    loopNode = findLoopNode(head);
    expect(loopNode).toBe(head);

    head = null;
    loopNode = findLoopNode(head);
    expect(loopNode).toBe(null);
})