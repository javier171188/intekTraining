'use strict';

var foo = (function () { 
    let resultArea = document.querySelector('.result');
    function bar(){
        let p = document.createElement('p');
        p.textContent = 'Public method bar aplied.';
        resultArea.appendChild(p);
    }

    function privateMethod(){
        let p = document.createElement('p');
        p.textContent = 'The method test used a private method.';
        resultArea.appendChild(p);
    }
    function test(){
        privateMethod();
    }
    return{
        bar,
        test
    }
 })();
foo.bar();
foo.test();

