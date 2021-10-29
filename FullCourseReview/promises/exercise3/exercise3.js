'use strict'
require('isomorphic-fetch');

function cancellableFetch(url) {
    let cancel;
    let request = new Promise((resolve, reject) => resolve(fetch(url)));
    let cancelPromise = new Promise((resolve, reject) => {
        cancel = () => reject({ reason: 'cancelled' })
    });
    let returningPromise = Promise.race([request, cancelPromise]);
    returningPromise.cancel = cancel;
    return returningPromise;
}

module.exports = cancellableFetch;
