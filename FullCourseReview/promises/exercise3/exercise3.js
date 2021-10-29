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


const result = cancellableFetch('https://www.google.com/')

console.log(result);
result
    .then((r) => console.log('success'))
    .catch((e) => console.log(e))
result.cancel();
