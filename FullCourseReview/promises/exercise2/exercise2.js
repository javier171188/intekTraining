'use strict'
require('regenerator-runtime/runtime');

function wait(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

async function queryRetry(request, maxRetry, delay, useIncrement) {
    let result;
    let waitTime = delay;
    for (let i = 0; i < maxRetry; i++) {
        try {
            result = await request();
            return result
        } catch (e) {
            if (i !== maxRetry - 1) {
                await wait(waitTime);
            }
            if (useIncrement) {
                waitTime += delay
            }
        }
    }
    throw { Error: `Query rejected ${maxRetry} times.` }
}

module.exports = queryRetry;