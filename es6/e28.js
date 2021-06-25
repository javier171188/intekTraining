'use strict';
let resultArea = document.querySelector('.result');
let url1 = 'https://jsonplaceholder.typicode.com/posts',
    url2 = 'https://jsonplaceholder.typicode.com/users';


var async = {
    getAll: function ( urlArray, callback){ 
            let callsArray = [];
            
            for (let i in urlArray){
                callsArray.push(function(){
                    return fetch(urlArray[i]).then(data => data.json());
                    }());
            }

            Promise.all(callsArray).then(response => {
                                    let finalR = {};
                                    for (let i in response){
                                        finalR[parseInt(i)+1] = response[i];
                                    }           
                                    callback(finalR)});
            } 
    };

async.getAll([url1,url2], finalFunction);

function finalFunction(responses){
    for (let i in responses){
        let p = document.createElement('p');
        p.innerHTML = `The type of the result of function ${i} is ${typeof responses[i]}.`;
        resultArea.appendChild(p);
        }
}