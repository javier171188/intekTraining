'use strict';
let url1 = 'https://jsonplaceholder.typicode.com/posts',
    url2 = 'https://jsonplaceholder.typicode.com/users';


var async = {
    getAll: function ( urlArray, callback){ 
            let obj;
            //let f =  fetch(urlArray[0]).then(data => data.json())
            //let g = fetch(urlArray[0]).then(data => data.json())
            //Promise.all([f(),g()]).then(response => console.log(response));
            const first = () => {
                return fetch(urlArray[0]).then(data => data.json());
                }
            const second = () => {
                return fetch(urlArray[0]).then(data => data.json());
            }

            Promise.all([first(),second()]).then(response => console.log(response));

    } };

//async.getAll([axCall1,axCall2], callback);
async.getAll([url1,url2], finalFunction);

function finalFunction(x){
    console.log(x);
}