'use strict';
import { eventChannel, END } from 'redux-saga';

function sendData() {
    let data = [];
    for (let i = 1; i <= 100; i++) {
        data.push({ argument: i, value: Math.random() },)
    }

    return data;
}


function subscriber() {
    return eventChannel(emitter => {
        const iv = setInterval(() => {
            let data = sendData();
            emitter(data);

        }, 1000);
        // The subscriber must return an unsubscribe function
        return () => {
            clearInterval(iv)
        }
    }
    )
}

export default subscriber;