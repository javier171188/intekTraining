'use strict';

class circularQueue {
    constructor(size) {
        this.size = size;
        this.queue = new Array(size);
        this.front = -1;
        this.rear = -1;
    }

    enqueue(data) {
        if ((this.rear + 1) % this.size === this.front) {
            console.log(`The queue is full. The element ${data} was not added.`);
        } else if (this.front === -1) {
            this.front = 0;
            this.rear = 0;
            this.queue[0] = data;
        } else {
            this.rear = (this.rear + 1) % this.size;
            this.queue[this.rear] = data;
        }
    }

    dequeue() {
        if (this.front === -1) {
            console.error('The queue is empty.');
            return;
        }
        const element = this.queue[this.front];
        if (this.front === this.rear) {
            this.front = -1;
            this.rear = -1;
        } else {
            this.front = (this.front + 1) % this.size;
        }
        return element;
    }

    display() {
        if (this.front === -1) {
            console.log('The queue is empty.');
        } else if (this.front === this.rear) {
            console.log(this.queue[this.front]);
        } else {
            console.log(this.queue[this.front]);
            let i = (this.front + 1) % this.size;
            while (i !== (this.rear + 1) % this.size) {
                console.log(this.queue[i]);
                i = (i + 1) % this.size;
            }
        }
    }
}

let circQue = new circularQueue(5);

circQue.enqueue(14);
circQue.enqueue(22);
circQue.enqueue(13);
circQue.enqueue(-6);
circQue.enqueue(7);
circQue.enqueue(8);
circQue.display();
console.log(`Element ${circQue.dequeue()} was dequeued.`);
console.log(`Element ${circQue.dequeue()} was dequeued.`);
console.log(`Element ${circQue.dequeue()} was dequeued.`);
circQue.display();
console.log('Adding')
circQue.enqueue(1);
circQue.enqueue(2);
circQue.enqueue(3);
circQue.display();
