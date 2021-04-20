let e = document.getElementsByClassName('exercise')[0];

function fibonacci(n){
    if (n == 1 || n == 2){
        return 1;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}

e.innerHTML = `Element 4: ${fibonacci(4)} <br/>`;
e.innerHTML += `Element 9: ${fibonacci(9)} <br/>`;
