'use strict'
import fetch from "node-fetch";
const urlQuery = url => () => fetch(url)

const maxRetry = 3;
const useIncrement = true;
const delay = 1000;

/**
* perform query successfully once or try up to a maximum of maxRetry times
* if unsuccessful, delay the next attempt for an amount of time. If attempts
* continue to fail then increase the delay between attempts if useIncrements
* is set to true. 
*/


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
    for (let i = 0; i < maxRetry; i++) {
        try {
            result = await request();
            return result
        } catch (e) {

        }
        wait(waitTime);
        if (useIncrement) {
            waitTime += delay
        }
    }
    throw new Error(`Query rejected ${maxRetry} times.`)
}

queryRetry(urlQuery('https://www.google.com/'), maxRetry, delay, useIncrement)
    .then((r) => console.log('success'))
    .catch(() => console.log('error'));

queryRetry(urlQuery('https://www.gle.com/'), maxRetry, delay, useIncrement)
    .then((r) => console.log('success'))
    .catch(console.log);
