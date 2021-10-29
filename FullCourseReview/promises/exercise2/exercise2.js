'use strict'

function wait(milliseconds) {
    var start = new Date().getTime();
    let waiting = true;
    while (waiting) {
        if ((new Date().getTime() - start) > milliseconds) {
            waiting = false
        }
    }
}

async function queryRetry(request, maxRetry, delay, useIncrement) {
    let result;
    let waitTime = delay;
    let start = new Date().getTime();
    for (let i = 0; i < maxRetry; i++) {
        try {
            result = await request();
            return result
        } catch (e) {
            if (i !== maxRetry - 1) {
                wait(waitTime);
            }
            if (useIncrement) {
                waitTime += delay
            }
        }
    }
    throw { Error: `Query rejected ${maxRetry} times.` }
}

module.exports = queryRetry;