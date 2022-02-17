'use strict';

const { circularQueue } = require('./exercise12');



describe('Basic test', () => {
    const circQue = new circularQueue(5);


    test('Test enqueue', () => {
        circQue.enqueue(14);
        circQue.enqueue(22);
        circQue.enqueue(23);
        circQue.enqueue(-6);
        circQue.enqueue(7);
        expect(circQue.queue).toEqual([14, 22, 23, -6, 7]);
        expect(circQue.front).toEqual(0);
        expect(circQue.rear).toEqual(4);
    })


    test('Test avoid adding more elements', () => {
        circQue.enqueue(9);
        circQue.enqueue(10);
        expect(circQue.queue).toEqual([14, 22, 23, -6, 7]);
        expect(circQue.front).toEqual(0);
        expect(circQue.rear).toEqual(4);
    })

    let dequeued;
    test('Test dequeue', () => {
        dequeued = circQue.dequeue();
        expect(dequeued).toEqual(14);
        expect(circQue.front).toEqual(1);
        expect(circQue.rear).toEqual(4);

        dequeued = circQue.dequeue();
        expect(dequeued).toEqual(22);
        expect(circQue.front).toEqual(2);
        expect(circQue.rear).toEqual(4);
    })


    test('Test add element after dequeue', () => {
        circQue.enqueue(10);
        expect(circQue.queue).toEqual([10, 22, 23, -6, 7]);
        expect(circQue.front).toEqual(2);
        expect(circQue.rear).toEqual(0);

        circQue.enqueue(11);
        expect(circQue.queue).toEqual([10, 11, 23, -6, 7]);
        expect(circQue.front).toEqual(2);
        expect(circQue.rear).toEqual(1);

        circQue.enqueue(12);
        expect(circQue.queue).toEqual([10, 11, 23, -6, 7]);
        expect(circQue.front).toEqual(2);
        expect(circQue.rear).toEqual(1);
    })

    test('Test display', () => {
        console.log = jest.fn(console.log);
        circQue.display();

        expect(console.log.mock.calls[0][0]).toEqual(23);
        expect(console.log.mock.calls[1][0]).toEqual(-6);
        expect(console.log.mock.calls[2][0]).toEqual(7);
        expect(console.log.mock.calls[3][0]).toEqual(10);
        expect(console.log.mock.calls[4][0]).toEqual(11);
    })
});

describe('Small sizes', () => {
    test('Zero defaults to one', () => {
        const circQue = new circularQueue(0);
        expect(circQue.queue).toEqual([undefined]);
    })

    test('One sized circular queue', () => {
        const circQue = new circularQueue(1);
        expect(circQue.queue).toEqual([undefined]);

        circQue.enqueue(14);
        circQue.enqueue(22);
        expect(circQue.queue).toEqual([14]);
        expect(circQue.front).toEqual(0);
        expect(circQue.rear).toEqual(0);

        let dequeued = circQue.dequeue();
        expect(circQue.queue).toEqual([14]);
        expect(dequeued).toEqual(14);
        expect(circQue.front).toEqual(-1);
        expect(circQue.rear).toEqual(-1);

        dequeued = circQue.dequeue();
        expect(circQue.queue).toEqual([14]);
        expect(dequeued).toEqual(undefined);
        expect(circQue.front).toEqual(-1);
        expect(circQue.rear).toEqual(-1);

        circQue.enqueue(10);
        expect(circQue.queue).toEqual([10]);
        expect(circQue.front).toEqual(0);
        expect(circQue.rear).toEqual(0);

    })

})

